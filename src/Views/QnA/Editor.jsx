// import './Editor.css';
import Editor from "@monaco-editor/react";

function EditorInput({code, setCode}) {

  return (
    <div>
        <div>
            <Editor
                height="100vh"
                theme="vs-dark"
                defaultLanguage="python"
                defaultValue="// Enter code here..."
                value={code}
                onChange={setCode}
            />
        </div>
    </div>
  );
}

export default EditorInput;
