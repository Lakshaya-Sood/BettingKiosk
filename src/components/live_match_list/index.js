import React from "react";
import autobind from "react-autobind";
import cloneDeep from "lodash/cloneDeep";
import LiveMatchSummary from "../../components/live_match_summary";

class LiveMatchList extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMatchIndex: 0
    };
    autobind(this);
  }

  getLiveMathces() {
    console.log(this.props.currentGameIndex);
    const matchClones = cloneDeep(
      this.props.games[this.props.currentGameIndex].matches
    );
    const matches = matchClones.splice(this.props.currentMatchIndex, 4);
    console.log(this.state.currentMatchIndex, matches);
    return matches.map((match, index) => {
      console.log('matchId', match);
      return (
      <div className="live-mathces" id={index} key={index + "_games"}>
        <LiveMatchSummary
          name={match.matchName}
          onClick={() => this.props.getMatchInfo(match.matchId, match.banner)}
        />
      </div>
    )});
  }

  getNextLiveMatch() {
    const matches = this.props.games[this.props.currentGameIndex].matches;
    if (this.state.currentMatchIndex < matches.length - 4) {
      this.setState({
        currentMatchIndex: this.state.currentMatchIndex + 1
      });
    }
  }

  getPrevLiveMatch() {
    const matches = this.props.games[this.props.currentGameIndex].matches;
    if (this.state.currentMatchIndex > 0) {
      this.setState({
        currentMatchIndex: this.state.currentMatchIndex - 1
      });
    }
  }

  render() {
    const matches = this.props.games[this.props.currentGameIndex].matches;
    return (
      <>
        <div
          className="next-live-match"
          onClick={this.getPrevLiveMatch}
          style={
            matches.length < 4 || this.state.currentMatchIndex === 0
              ? { color: "grey" }
              : null
          }
        >
          <div style={{ padding: "15px" }}>{"<<"}</div>
        </div>
        {this.getLiveMathces()}
        <div
          className="next-live-match"
          style={
            matches.length < 4 ||
            this.state.currentMatchIndex === matches.length - 4
              ? { color: "grey" }
              : null
          }
          onClick={this.getNextLiveMatch}
        >
          <div style={{ padding: "15px" }}>{">>"}</div>
        </div>
      </>
    );
  }
}

export default LiveMatchList;
