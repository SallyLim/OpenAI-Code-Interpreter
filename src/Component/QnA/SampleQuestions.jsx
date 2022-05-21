import "./SampleQuestions.css";

function SampleQuestions({ setQuestion }) {
  const sampleQuestions = [
    "What does this code do?",
    "What is the runtime complexity of this code?",
    "What is the type of x?",
    "What will this code print?",
  ];

  return (
    <div
      className="sampleQuestionButtonContainer"
      width="${(Dimensions.get('window').width)}px;"
    >
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
