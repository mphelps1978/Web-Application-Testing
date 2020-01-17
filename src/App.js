import React, { useState } from "react";
import "./App.css";

import ScoreBoard from "./components/ScoreBoard";
import ControlPanel from "./components/ControlPanel";

function App() {
  let [balls, setBalls] = useState(0);
  let [strikes, setStrikes] = useState(0);
  let [outs, setOuts] = useState(0);

  let [battingTeam, setBattingTeam] = useState([
    ("team1": "Giants"),
    ("team2": "Dodgers"),
  ]);
  let [atBat, setAtBat] = useState("Batter Name Here");
  let [cubsScore, setCubsScore] = useState(0);
  let [soxScore, setSoxScore] = useState(0);

  const changeTeamAtBat = () => {};

  const addBalls = () => {
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const addStrikes = () => {
    // console.log("Strikes Button Pressed");
    // console.log("Strikes: ", strikes);
    if (strikes === 2) {
      addOuts();
      setBalls(0);
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const addFoul = () => {
    if (strikes === 2) {
      setStrikes(strikes + 0);
    } else {
      addStrikes();
    }
  };

  const addOuts = () => {
    console.log("Outs Button Pressed");
    console.log("Outs: ", outs);
    if (outs === 2) {
      setBalls(0);
      setStrikes(0);
      setOuts(0);
    } else {
      setBalls(0);
      setStrikes(0);
      setOuts(outs + 1);
    }
  };

  const addHit = () => {
    setBalls(0);
    setStrikes(0);
  };

  return (
    <div className="App">
      SCOREBOARD APP
      <div className="scoreboard">
        <ScoreBoard
          balls={balls}
          strikes={strikes}
          outs={outs}
          cubsScore={cubsScore}
          soxScore={soxScore}
          atBat={atBat}
          battingTeam={battingTeam}
        />
      </div>
      <div className="control-panel">
        <ControlPanel
          addBalls={addBalls}
          addStrikes={addStrikes}
          addOuts={addOuts}
          addHit={addHit}
          addFoul={addFoul}
        />
      </div>
    </div>
  );
}

export default App;
