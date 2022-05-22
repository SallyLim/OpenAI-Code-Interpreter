import "./PrevQnaLog.css";

function PrevQnaLog({ qnaList, loading }) {
  // TODO: clear the qna list when they add a different code or make changes to the code
  // modal to notify that it will be cleared and you can see it in the history tab
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
