// import './Editor.css';
import Editor from "@monaco-editor/react";

function EditorInput({code, setCode}) {

  return (
    <div>
        <div>
            <Editor
              className="editor"
              height="95vh"
              theme="vs-dark"
              defaultLanguage="python"
              defaultValue="# Enter code here..."
              value={code}
              onChange={value => setCode(value)}
            />
        </div>
    </div>
  );
}

export default EditorInput;
