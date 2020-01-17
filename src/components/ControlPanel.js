import React from "react";
import "../App.css";
import "../utils/boardComponents";

const ControlPanel = props => {
  return (
    <div>
      <button onClick={props.addStrikes}>Add a Strike</button>
      <button onClick={props.addBalls}>Add a Ball</button>
      <button onClick={props.addFoul}>Add a Foul</button>
      <button onClick={props.addOuts}>Add an Out</button>
      <button onClick={props.addHit}>Add a Hit</button>
    </div>
  );
};

export default ControlPanel;
