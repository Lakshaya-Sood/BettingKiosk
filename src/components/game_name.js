import React from "react";

const GameName = props => {
  return <div className="game-name" onClick={props.onClick}>
    <img src={} />
    {props.name}
  </div>;
};

export default GameName;
