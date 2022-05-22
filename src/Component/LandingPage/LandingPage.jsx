import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Header from "../Header";
import "./LandingPage.css";
import { ReactComponent as Code } from "./Code.svg";
import { useDencrypt } from "use-dencrypt-effect";
import React from "react";

function LandingPage() {
  const value = "Understand code faster and easier";
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(value);
    }, 0);

    return () => clearInterval(action);
  }, []);

  return (
    <div className="landingPageContainer">
      <Header />
      <h1 className="landingPageHeader">{result}</h1>
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
