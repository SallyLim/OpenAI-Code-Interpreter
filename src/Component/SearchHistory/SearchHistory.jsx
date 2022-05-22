import SideNav from "../SideNav";
import Header from "../Header";
import "./SearchHistory.css";
import SortList from "./SortList";
import HistoryList from "./HistoryList";
import ClearHistory from "./ClearHistory";
import useLocalStorage from "../useLocalStorage";

function SearchHistory() {
  const [qnaList, setQnaList] = useLocalStorage("history", []);

  return (
    <div>
      <Header />
      <div className="flexContainer">
        <SideNav />
        <div className="flexDiv1">
          <h2 className="historyListHeader">
            Most recent 25 search results shown
          </h2>

          <div className="adjustableButtons">
            <SortList />
            <ClearHistory setQnaList={setQnaList} />
          </div>
          <HistoryList qnaList={qnaList} />
        </div>
        <div className="flexDiv2"></div>
      </div>
    </div>
  );
}

export default SearchHistory;
