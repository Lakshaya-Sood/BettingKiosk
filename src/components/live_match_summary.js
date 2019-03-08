import React from "react";

const LiveMatchSummary = props => {
  return (
    <div className="live-match-summary" onClick={props.onClick}>
      <div style={{margin: 'auto', width: '80%', paddingTop: '10px', paddingBottom: '10px' }}>{props.name}</div>
    </div>
  );
};

export default LiveMatchSummary;
