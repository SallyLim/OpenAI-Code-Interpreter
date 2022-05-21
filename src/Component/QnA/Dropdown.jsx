import { useState } from "react";
import "./Dropdown.css";
import { ReactComponent as ArrowDown } from "./ArrowDown.svg";

function Dropdown({ children, currentLanguage }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button className="dropdownButton" onClick={() => setVisible(true)}>
        {currentLanguage}
        <ArrowDown className="arrowDown" />
      </button>
      {visible && (
        <div className="menu" onClick={() => setVisible(false)}>
          {children}
        </div>
      )}
      {visible && (
        <div className="mask" onClick={() => setVisible(false)}></div>
      )}
    </div>
  );
}

export default Dropdown;
