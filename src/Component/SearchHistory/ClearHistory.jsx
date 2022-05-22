import "./ClearHistory.css";

function ClearHistory({ setQnaList }) {
  return (
    <div>
      <button className="clearHistoryButton" onClick={() => setQnaList([])}>
        Clear History
      </button>
    </div>
  );
}

export default ClearHistory;
