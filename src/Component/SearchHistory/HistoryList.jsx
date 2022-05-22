import classNames from "classnames";
import "./HistoryList.css";

function HeaderList({
  qnaList,
  sortingChoice,
  selectedHistoryItem,
  setSelectedHistoryItem,
}) {
  return (
    <div>
      <div className="historyListContainer">
        {qnaList
          .sort(sortingChoice.sortingFunction)
          .slice(0, 25)
          .map((x, index) => (
            <div
              key={index}
              className={classNames("historyList", {
                historyListSelected: selectedHistoryItem === x,
              })}
              onClick={() => setSelectedHistoryItem(x)}
            >
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
                  {x.code
                    .replace(/# Enter code here...\n/g, "")
                    .split("\n")[0] + "..."}
                </p>
              </div>
              <div className="historyItem">
                <p className="itemHeader">Time</p>
                <p className="itemDescription">{x.time} PST</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HeaderList;
