import "./SortList.css";
import { useState } from "react";
import Dropdown from "../Dropdown";

function SortList() {
  const [sortingChoice, setSortingChoice] = useState("Ascending Order");

  let sortingOptions = ["Ascending Order", "Descending Order"];
  return (
    <div className="sortingContainer">
      <p className="sortedBy">Sorted by</p>
      <Dropdown currentSelection={sortingChoice}>
        {sortingOptions.map((choice) => {
          return (
            <div
              className="menuItem"
              key={choice}
              onClick={() => setSortingChoice(choice)}
            >
              {choice}
            </div>
          );
        })}
      </Dropdown>
    </div>
  );
}

export default SortList;
