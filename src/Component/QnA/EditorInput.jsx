import Editor from "@monaco-editor/react";

function EditorInput({ code, setCode, language }) {
  return (
    <div>
      <Editor
        className="editor"
        height="95vh"
        theme="vs-dark"
        defaultLanguage={language}
        defaultValue="# Enter code here..."
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}

export default EditorInput;
