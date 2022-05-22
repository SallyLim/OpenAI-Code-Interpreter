import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import Dropdown from "../Dropdown";
import "./EditorInput.css";

function EditorInput({ code, setCode }) {
  const ref = useRef(null);
  const [language, setLanguage] = useState("python");

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

  //TODO: change monaco editor background color to --primary
  return (
    <div>
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
      </div>
      <div className="editorParent">
        <Editor
          onMount={(editor) => (ref.current = editor)}
          className="editor"
          theme="vs-dark"
          defaultLanguage={language}
          defaultValue="# Enter code here..."
          value={code}
          onChange={(value) => setCode(value)}
        />
      </div>
    </div>
  );
}

export default EditorInput;
