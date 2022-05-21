import { useRef, useState } from "react";
import "./Dropdown.css";

function Dropdown({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button className="dropdownButton" onClick={() => setVisible(true)}>
        Test
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
