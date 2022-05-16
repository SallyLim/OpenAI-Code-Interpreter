import { useState } from 'react';
import EditorInput from './EditorInput';
import Header from './Header';
import PrevQnaLog from './PrevQnaLog';

import './Qna.css';

function Qna() {

    const [code, setCode] = useState("")
    const [response, setResponse] = useState("")
    const [APIAnswer, setAPIAnswer] = useState("")
    const [qnaList, setQnaList] = useState([])

    //TODO: update the values and props
    const data = {
        prompt: code + "\n" + response,
        temperature: 0.4,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };

    //TODO: update
    const getAnswer = async () => {
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

        const copy = qnaList.map(x => x)
        copy.push([code + "\n" + response, APIAnswer])
        setQnaList(copy)
        setResponse("")
    }

    //TODO: eventually delete
    const getAnswerTest = () => {
        let testAnswer = "Test answer " + Math.random().toString()
        setAPIAnswer(testAnswer)

        const x = qnaList.map(x => x)
        x.push([code + "\n" + response,testAnswer])
        setQnaList(x)
        setResponse("")
    }


    return (
        <div>
            <Header />
            <div className='flexContainer'>
                <div className='flexDiv1'>
                    <PrevQnaLog qnaList={qnaList}/>
                    <textarea className='textArea'
                        rows = "5" cols = "20" 
                        placeholder="Enter question here..." 
                        value={response}
                        onChange={v => setResponse(v.target.value)}
                    />
                    <br/>
                    {/* <button type="submit" onClick={getAnswer}>Submit</button> */}
                    <button className="submitButton" type="submit" onClick={getAnswerTest}>Submit</button>
                </div>
                <div className='flexDiv2'>
                    <EditorInput code={code} setCode={setCode}/>
                </div>
            </div>
        </div>
    );
}

export default Qna;
