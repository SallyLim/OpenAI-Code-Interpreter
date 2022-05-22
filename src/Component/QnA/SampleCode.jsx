import Editor from "@monaco-editor/react";
import "./SampleCode.css";

function SampleCode({ setIsOpen }) {
  const sampleCode = [
    {
      code: `num = int(input("Enter a number: "))\nif (num % 2) == 0:\nprint("{0} is Even".format(num))\nelse:\nprint("{0} is Odd".format(num))`,
      language: "python",
    },
    {
      code: `my_list = []\nif not my_list:\nprint("the list is empty")`,
      language: "python",
    },
    {
      code: `const students = [\n{name: 'Shoaib', roll: 2},\n{name: 'Mehedi', roll: 10},\n{name: 'Alex', roll: 5}\n];\n\nfunction search(student) {\nreturn student.name=== "Mehedi";\n}\n\nconsole.log(students.find(search));`,
      language: "javascript",
    },
    {
      code: `const name = ['Shoaib', 'Mehedi', 'Alex', 'Jane'];\nconst arr = [1, 30, 4, 21, 100000];\nname.sort();\nconsole.log(name);\n\narr.sort(function(a, b) {\nreturn a - b;\n});\n\nconsole.log(arr);`,
      language: "javascript",
    },
  ];

  return (
    <div className="sampleCodeContainer">
      <div className="sampleCodes">
        {sampleCode.map((sample) => (
          <div>
            <Editor
              className="sampleCodeItem"
              height="200px"
              width="400px"
              value={sample.code}
              onMount={(editor, monaco) => {
                monaco.editor.defineTheme("customTheme", {
                  base: "vs-dark",
                  inherit: true,
                  rules: [],
                  colors: {
                    "editor.background": "#27245C",
                  },
                });
                monaco.editor.setTheme("customTheme");
              }}
              language={sample.language}
              fontSize="10px"
              options={{ readOnly: true }}
            />
            <div className="selectMask" />
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button className="select">Select</button>
        <button className="cancel" onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default SampleCode;
