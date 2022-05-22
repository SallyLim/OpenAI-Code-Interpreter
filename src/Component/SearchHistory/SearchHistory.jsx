import SideNav from "../SideNav";
import Header from "../Header";
import "./SearchHistory.css";
import SortList from "./SortList";

function SearchHistory() {
  return (
    <div>
      <Header />
      <div className="flexContainer">
        <SideNav />
        <div className="flexDiv1">
          <SortList />
        </div>
        <div className="flexDiv2"></div>
      </div>
    </div>
  );
}

export default SearchHistory;
