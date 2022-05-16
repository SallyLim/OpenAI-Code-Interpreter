import './PrevQnaLog.css';

function PrevQnaLog({qnaList}) {

  return (
    <div className='prevQna'>
        {qnaList.map((x) => (
            <div >
                <p className='question'>Q: {x[0]}</p>
                <p className='answer'>A: {x[1]}</p>
            </div>
        ))}
    </div>
  );
}

export default PrevQnaLog;
