import "./PrevQnaLog.css";

function PrevQnaLog({ qnaList, loading }) {
  // TODO: make vertically scrollable with search bar fixed
  return (
    <div className="prevQna">
      {qnaList.map((x, index) => (
        <div key={index}>
          <p className="question">Q: {x.question}</p>
          <p className="answer">A: {x.answer}</p>
        </div>
      ))}
      {loading ? <p>loading...</p> : <div />}
    </div>
  );
}

export default PrevQnaLog;
