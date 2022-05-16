import { useState } from 'react';
import EditorInput from './Editor';
import './Qna.css';

function Qna() {

    const [code, setCode] = useState("")
    const [response, setResponse] = useState("")
    const [APIAnswer, setAPIAnswer] = useState("")

    const data = {
        prompt: code + "\n" + response,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };

    const getAnswer = async () => {
        console.log("warning!!")

        const answer = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,  
            },
            body: JSON.stringify(data),
        });
        const body = await answer.json()
        setAPIAnswer(body.choices[0].text)
    }

    const getAnswerTest = () => {
        setAPIAnswer("Test answer " + Math.random().toString())
    }

    return (
        <div className='flexContainer'>
            <div className='flexDiv1'>
                <label>Question:</label><br/>
                <textarea className='textArea'
                    rows = "5" cols = "20" 
                    placeholder="Enter question here..." 
                    value={response}
                    onChange={v => setResponse(v.target.value)}
                />
                <br/>
                {/* <button type="submit" onClick={getAnswer}>Submit</button> */}
                <button type="submit" onClick={getAnswerTest}>Submit</button>
                <p>{APIAnswer}</p>
            </div>
            <div className='flexDiv2'>
                <EditorInput code={code} setCode={(v) => setCode(v.target.value)}/>
            </div>
        </div>
    );
}

export default Qna;
