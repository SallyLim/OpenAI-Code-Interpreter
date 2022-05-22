import "./SortList.css";
import { useState } from "react";
import Dropdown from "../Dropdown";

function SortList({ sortingChoice, setSortingChoice, sortingOptions }) {
  return (
    <div className="sortingContainer">
      <p className="sortedBy">Sorted by</p>
      <Dropdown currentSelection={sortingChoice.key}>
        {sortingOptions.map((choice) => {
          return (
            <div
              className="menuItem"
              key={choice.key}
              onClick={() => setSortingChoice(choice)}
            >
              {choice.key}
            </div>
          );
        })}
      </Dropdown>
    </div>
  );
}

export default SortList;
