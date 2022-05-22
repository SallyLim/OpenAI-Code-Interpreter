import "./HistoryList.css";
import useLocalStorage from "../useLocalStorage";

function HeaderList() {
  const [qnaList, setQnaList] = useLocalStorage("history", []);

  //TODO: add clear history button
  //TODO: limit the shown to 25
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
              <p className="itemDescription">{x.code}</p>
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
