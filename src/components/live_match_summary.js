import React from "react";

const LiveMatchSummary = props => {
  return (
    <div className="live-match-summary">
      <div>{props.team1}</div>
      <div>vs</div>
      <div>{props.team2}</div>
    </div>
  );
};

export default LiveMatchSummary;
