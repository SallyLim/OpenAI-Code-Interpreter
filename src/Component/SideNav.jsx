import "./SideNav.css";
import { ReactComponent as Robot } from "./Robot.svg";
import { ReactComponent as History } from "./History.svg";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div className="flex">
      <NavLink
        to="/ai"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: "var(--lightPrimary2)" }
            : { backgroundColor: "inherit" }
        }
      >
        <div className="navButton">
          <Robot />
        </div>
      </NavLink>
      <NavLink
        to="/history"
        style={({ isActive }) =>
          isActive
            ? { backgroundColor: "var(--lightPrimary2)" }
            : { backgroundColor: "inherit" }
        }
      >
        <div className="navButton">
          <History />
        </div>
      </NavLink>
    </div>
  );
}

export default SideNav;
