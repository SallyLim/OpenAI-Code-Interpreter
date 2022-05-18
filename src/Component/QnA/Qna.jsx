import { useState } from "react";
import EditorInput from "./EditorInput";
import Header from "./Header";
import PrevQnaLog from "./PrevQnaLog";
import SampleQuestions from "./SampleQuestions";
import ResizePanel from "react-resize-panel";

import "./Qna.css";

function Qna() {
  const [code, setCode] = useState("");
  const [question, setQuestion] = useState("");
  const [qnaList, setQnaList] = useState([]);
  const [loading, setLoading] = useState(false);

  //TODO: update the values and props
  const data = {
    prompt: code + "\n" + question,
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  //TODO: update
  const getAnswer = async () => {
    setLoading(true);
    const answer = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
        },
        body: JSON.stringify(data),
      }
    );
    const body = await answer.json();

    setLoading(false);
    const copy = qnaList.map((x) => x);
    copy.push([code, question, body.choices[0].text]);
    setQnaList(copy);

    setQuestion("");
  };

  //TODO: eventually delete
  const getAnswerTest = () => {
    let testAnswer = "Test answer " + Math.random().toString();

    const x = qnaList.map((x) => x);
    x.push([code + "\n" + question, testAnswer]);
    setQnaList(x);
    setQuestion("");
  };

  return (
    <div>
      <Header />
      <div className="flexContainer">
        <ResizePanel direction="e">
          <div className="flexDiv1">
            <textarea
              className="textArea"
              rows="5"
              cols="20"
              placeholder="Enter question here..."
              value={question}
              onChange={(v) => setQuestion(v.target.value)}
            />
            {/* <button type="submit" onClick={getAnswer}>
            Submit
          </button> */}
            <SampleQuestions />
            <button
              className="submitButton"
              type="submit"
              onClick={getAnswerTest}
            >
              Submit
            </button>
            <PrevQnaLog qnaList={qnaList} loading={loading} />
          </div>
        </ResizePanel>
        <div className="flexDiv2">
          <EditorInput code={code} setCode={setCode} />
        </div>
      </div>
    </div>
  );
}

export default Qna;
