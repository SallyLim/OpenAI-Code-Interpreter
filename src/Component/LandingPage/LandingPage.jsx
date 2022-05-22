import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Header from "../Header";
import "./LandingPage.css";
import { ReactComponent as Code } from "./Code.svg";

function LandingPage() {
  return (
    <div className="landingPageContainer">
      <Header />
      <h1 className="landingPageHeader">Understand code faster and easier</h1>
      <h3 className="landingPageSubheader">
        Ask OpenAI questions to get a better understanding of your code
      </h3>
      <Link to="/ai">
        <button className="getStartedButton">
          <Code />
          <p className="getStartedButtonText">Get Started</p>
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
