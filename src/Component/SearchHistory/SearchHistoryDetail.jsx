import Editor from "@monaco-editor/react";
import "./SearchHistoryDetail.css";

function SearchHistoryDetail({ selectedHistoryItem }) {
  return (
    <div className="historyDetailContainer">
      {selectedHistoryItem !== undefined ? (
        <div>
          <p className="questionSubmissionTimeHeader">
            Submission at {selectedHistoryItem.time}
          </p>
          <h4 className="detailHistoryItemTitle">Code</h4>
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
          <h4 className="detailHistoryItemTitle">Question</h4>
          <p className="detailHistoryItemDescription">
            {selectedHistoryItem.question}
          </p>
          <h4 className="detailHistoryItemTitle">Answer</h4>
          <p className="detailHistoryItemDescription">
            {selectedHistoryItem.answer}
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default SearchHistoryDetail;
