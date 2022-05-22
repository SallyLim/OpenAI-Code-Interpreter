import "./SideNav.css";
import { ReactComponent as Robot } from "./Robot.svg";
import { ReactComponent as History } from "./History.svg";

function SideNav() {
  //TODO: link the icons to the appropriate pages
  // add highlight to the current page
  return (
    <div className="flex">
      <div className="navButton">
        <a>
          <Robot />
        </a>
      </div>
      <div className="navButton">
        <a>
          <History />
        </a>
      </div>
    </div>
  );
}

export default SideNav;
