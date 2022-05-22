import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import Dropdown from "../Dropdown";
import "./EditorInput.css";
import SampleCode from "./SampleCode";

function EditorInput({ code, setCode, language, setLanguage }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState(undefined);

  const languageMap = {
    python: "Python",
    javascript: "JavaScript",
  };

  useEffect(() => {
    if (ref === null) {
      return;
    }

    function handleResize() {
      ref.current.layout({});
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  useEffect(() => {
    if (selectedCode !== undefined) {
      setLanguage(selectedCode.language);
      setCode(selectedCode.code);
    }
  }, [selectedCode]);

  useEffect(() => {
    if (language === "python") {
      setCode(
        code.replace("// Enter code here...\n", "# Enter code here...\n")
      );
      console.log(code);
    } else {
      setCode(
        code.replace("# Enter code here...\n", "// Enter code here...\n")
      );
      console.log(code);
    }
  }, [language]);

  return (
    <>
      <div className="dropdownContainer">
        <Dropdown currentSelection={languageMap[language]}>
          {Object.entries(languageMap).map(([key, value]) => {
            return (
              <div
                className="menuItem"
                key={key}
                onClick={() => setLanguage(key)}
              >
                {value}
              </div>
            );
          })}
        </Dropdown>
        <button className="selectSampleCode" onClick={() => setIsOpen(true)}>
          Select Sample Code
        </button>
      </div>
      {isOpen ? (
        <SampleCode
          setIsOpen={setIsOpen}
          selectedCode={selectedCode}
          setSelectedCode={setSelectedCode}
        />
      ) : (
        <div className="editorParent">
          <Editor
            onMount={(editor, monaco) => {
              monaco.editor.defineTheme("customTheme", {
                base: "vs-dark",
                inherit: true,
                rules: [],
                colors: {
                  "editor.background": "#1A183D",
                },
              });
              monaco.editor.setTheme("customTheme");

              ref.current = editor;
            }}
            className="editor"
            language={language}
            defaultValue={
              (language === "python"
                ? "# Enter code here...\n"
                : "// Enter code here...\n") + (selectedCode?.code ?? "")
            }
            value={code}
            onChange={(value) => setCode(value)}
          />
        </div>
      )}
    </>
  );
}

export default EditorInput;

//useEffe
