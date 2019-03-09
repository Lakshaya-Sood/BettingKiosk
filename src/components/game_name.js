import React from "react";

const GameName = props => {
  return <div className="game-name" onClick={props.onClick}>
    {props.name}
  </div>;
};

export default GameName;
