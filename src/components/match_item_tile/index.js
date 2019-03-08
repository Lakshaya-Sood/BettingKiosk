import React from "react";
import autobind from "react-autobind";
import "./match_item_tile.css";

class MatchItemTile extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }
  render() {
    let { id, header, team1Score, team2Score } = this.props;
    return (
      <div className="tile-main" key={id}>
        <div className="tile-header">{header}</div>
        <div className="dummy-tile-header" />
        <div className="tile-body"><span className='under-tile'>Team 1: <span style={{fontSize: '18px'}}>{team1Score}</span></span></div>
        <div className="tile-body"><span className='under-tile'>Team 2: <span style={{fontSize: '18px'}}>{team2Score}</span></span></div>
      </div>
    );
  }
}

export default MatchItemTile;
