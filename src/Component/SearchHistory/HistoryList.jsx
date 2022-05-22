import "./HistoryList.css";

function HeaderList({ qnaList }) {
  //TODO: add clear history button
  //TODO: limit the shown to 25
  //TODO: add sorting mechanism from the dropdown selection
  //TODO: need to be selectable with css and functionality
  return (
    <div>
      <div className="historyListContainer">
        {qnaList.map((x, index) => (
          <div key={index} className="historyList">
            <div className="historyItem">
              <p className="itemHeader">Question</p>
              <p className="itemDescription">{x.question}</p>
            </div>
            <div className="historyItem">
              <p className="itemHeader">Answer</p>
              <p className="itemDescription">{x.answer}</p>
            </div>
            <div className="historyItem">
              <p className="itemHeader">Code</p>
              <p className="itemDescription">
                {x.code.replace(/# Enter code here...\n/g, "").split("\n")[0] +
                  "..."}
              </p>
            </div>
            <div className="historyItem">
              <p className="itemHeader">Time</p>
              <p className="itemDescription">{x.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderList;
