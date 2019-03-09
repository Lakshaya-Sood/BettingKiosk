import React from 'react';

const GameName = props => {
  return <div className="game-name" onClick={props.onClick}>
    <img style={{height: 50, width: 50 }} src={`data:image/png;base64,${props.imageSrc}`} />
    <div>{props.name}</div>
  </div>;
};

export default GameName;
