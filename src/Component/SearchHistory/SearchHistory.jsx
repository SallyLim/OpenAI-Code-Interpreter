import SideNav from "../SideNav";
import Header from "../Header";
import "./SearchHistory.css";
import SortList from "./SortList";
import HistoryList from "./HistoryList";
import ClearHistory from "./ClearHistory";
import useLocalStorage from "../useLocalStorage";
import { useState } from "react";
import SearchHistoryDetail from "./SearchHistoryDetail";

const sortingOptions = [
  {
    key: "Ascending Order",
    sortingFunction: (a, b) => new Date(a.time) - new Date(b.time),
  },
  {
    key: "Descending Order",
    sortingFunction: (a, b) => new Date(b.time) - new Date(a.time),
  },
];

function SearchHistory() {
  const [qnaList, setQnaList] = useLocalStorage("history", []);
  const [sortingChoice, setSortingChoice] = useState(sortingOptions[1]);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState();

  return (
    <div>
      <Header />
      <div className="flexContainerSearch">
        <SideNav />
        <div className="flexDiv1Search">
          <h2 className="historyListHeader">
            Most recent 25 search results shown
          </h2>

          <div className="adjustableButtons">
            <SortList
              sortingChoice={sortingChoice}
              setSortingChoice={setSortingChoice}
              sortingOptions={sortingOptions}
            />
            <ClearHistory setQnaList={setQnaList} />
          </div>
          <HistoryList
            qnaList={qnaList}
            sortingChoice={sortingChoice}
            selectedHistoryItem={selectedHistoryItem}
            setSelectedHistoryItem={setSelectedHistoryItem}
          />
        </div>
        <div className="flexDiv2Search">
          <SearchHistoryDetail selectedHistoryItem={selectedHistoryItem} />
        </div>
      </div>
    </div>
  );
}

export default SearchHistory;
