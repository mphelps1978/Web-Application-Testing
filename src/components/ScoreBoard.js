import React from "react";

const ScoreBoard = props => {
  return (
    <div className="scoreboard-container">
      <div className="scoreboard-scoringArea">
        <div className="cubs-score">Cubs: {props.cubsScore}</div>
        <div className="sox-score">Red Sox: {props.soxScore}</div>
      </div>

      <div className="at-bat-info">
        <p>At Bat: {props.atBat}</p>
        <p>Balls: {props.balls}</p>
        <p>Strikes:{props.strikes}</p>
      </div>

      <div className="rotation-info">
        {/* <p>Batting Team: {props.battingTeam}</p> Needs further logic */}
        <p>Outs: {props.outs}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
