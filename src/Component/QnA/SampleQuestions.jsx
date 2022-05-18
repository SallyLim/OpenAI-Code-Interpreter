import "./SampleQuestions.css";

function SampleQuestions() {
  const sampleQuestions = [
    "What does this code do?",
    "What is the runtime complexity of this code?",
    "What is the type of x",
    "What will this code print?",
  ];

  //TODO: make onClick function
  const fillQuestionTextBox = () => {};

  //TODO: make horizontally scrollable
  return (
    <div className="sampleQuestionButtonContainer">
      {sampleQuestions.map((q) => (
        <button
          className="sampleQuestionButton"
          type="button"
          onClick={fillQuestionTextBox}
        >
          {q}
        </button>
      ))}
    </div>
  );
}

export default SampleQuestions;
