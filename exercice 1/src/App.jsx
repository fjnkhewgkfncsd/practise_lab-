import React from "react";
import {useState} from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score/10) * 100}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if(score<=2){
      scoreColor = `#f1c40f`;
    }else if(score<=4){
      scoreColor = `#e67e22`;
    }else if(score<=8){
      scoreColor = `#e74c3c`;
    }else if(score<=10){
      scoreColor = `#c0392b`;
    }
    

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor
    };
  };
  const handle = (events) => {
      setScore(Number(events.target.value));
    }

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handle}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
