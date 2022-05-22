import Editor from "@monaco-editor/react";
import "./SearchHistoryDetail.css";

function SearchHistoryDetail({ selectedHistoryItem }) {
  return (
    <div className="historyDetailContainer">
      {selectedHistoryItem !== undefined ? (
        <div>
          <h3>Question submitted on {selectedHistoryItem.time}</h3>
          <h4>Code</h4>
          <Editor
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
            className="codeViewer"
            height="250px"
            language={selectedHistoryItem.language}
            options={{ readOnly: true }}
            value={selectedHistoryItem.code.replace(
              /# Enter code here...\n/g,
              ""
            )}
          />
          <h4>Question</h4>
          <p>{selectedHistoryItem.question}</p>
          <h4>Answer</h4>
          <p>{selectedHistoryItem.answer}</p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default SearchHistoryDetail;
