import "./SampleQuestions.css";

function SampleQuestions({ setQuestion }) {
  const sampleQuestions = [
    "What does this code do?",
    "What is the runtime complexity of this code?",
    "What is the type of x?",
    "What will this code print?",
  ];

  //TODO: make horizontally scrollable
  return (
    <div className="sampleQuestionButtonContainer">
      {sampleQuestions.map((q) => (
        <button
          className="sampleQuestionButton"
          type="button"
          onClick={() => setQuestion(q)}
        >
          {q}
        </button>
      ))}
    </div>
  );
}

export default SampleQuestions;
