import "./PrevQnaLog.css";

function PrevQnaLog({ qnaList, loading }) {
  return (
    <div className="prevQnaContainer">
      {qnaList.map((x, index) => (
        <div key={index} className="prevQna">
          <p className="question">Q: {x.question}</p>
          <p className="answer">A: {x.answer}</p>
        </div>
      ))}
      {loading ? <p>loading...</p> : <div />}
    </div>
  );
}

export default PrevQnaLog;
