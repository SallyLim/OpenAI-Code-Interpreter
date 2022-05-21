import "./Header.css";
import { ReactComponent as HomeIcon } from "./HomeIcon.svg";

function Header({ language, setLanguage }) {
  const codingLanuageDropdown = {
    Python: "python",
    JavaScript: "javascript",
  };

  //TODO: make Home icon clickable to go to home screen
  return (
    <div className="header">
      <HomeIcon />
      <div className="headerText">
        <p className="headerTextCheat">cheat</p>
        <p className="headerTextCode">code</p>
      </div>
    </div>
  );
}

export default Header;
