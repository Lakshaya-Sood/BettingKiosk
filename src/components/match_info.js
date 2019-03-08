import React from "react";

const style= {width: '33.36%', margin: '5'};

class MatchInfo extends React.Component {
  constructor(props){
    super(props);
    this.getMatchInfo = this.getMatchInfo.bind(this);
  }

  getMatchInfo() {
    const { matches } = this.props;
    return matches.map((match) => (
      <div className="row-margin" style={{paddingTop: '10px', paddingBottom: '10px', borderBottom: '1px solid white'}}>
        <div style={{...style, borderRight: '1px solid white'}}>
          {match.name}
        </div>
        <div style={{...style, borderRight: '1px solid white'}}>
          {match.betInfo.bet_name}
        </div>
        <div style={style}>
          {match.betInfo.rate}
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.getMatchInfo()}
      </div>
    );
  }
}

export default MatchInfo;