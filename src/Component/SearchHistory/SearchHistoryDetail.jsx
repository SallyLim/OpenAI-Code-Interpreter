import "./SearchHistoryDetail.css";

function SearchHistoryDetail({ selectedHistoryItem }) {
  return (
    <div className="historyDetailContainer">
      {selectedHistoryItem !== undefined ? (
        <div>
          <h3>Question submitted on {selectedHistoryItem.time}</h3>
          <h4>Code</h4>

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
