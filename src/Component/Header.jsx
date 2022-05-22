import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as HomeIcon } from "./HomeIcon.svg";

function Header() {
  const codingLanuageDropdown = {
    Python: "python",
    JavaScript: "javascript",
  };

  return (
    <div className="header">
      <Link to="/">
        <HomeIcon />
      </Link>
      <div className="headerText">
        <p className="headerTextCheat">cheat</p>
        <p className="headerTextCode">code</p>
      </div>
    </div>
  );
}

export default Header;
