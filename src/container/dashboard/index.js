import React from "react";
import autobind from "react-autobind";
import { Row, Col } from "react-bootstrap";
import GameName from "../../components/game_name";
import _ from "lodash";
import LiveMatchSummary from "../../components/live_match_summary";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      games: ["Cricket", "Horse Racing", "FootBall", "Volley Ball"],
      matches: [
        {
          team1: "Team A",
          team2: "Team B"
        },
        {
          team1: "Team A",
          team2: "Team C"
        },
        {
          team1: "Team C",
          team2: "Team B"
        },
        {
          team1: "Team A",
          team2: "Team D"
        },
        {
          team1: "Team D",
          team2: "Team B"
        }
      ],
      currentMatchIndex: 0
    };
    autobind(this);
  }

  getGames() {
    return this.state.games.map(game => <GameName name={game} />);
  }

  getLiveMathces() {
    const matchClones = _.clone(this.state.matches);
    const matches = matchClones.splice(this.state.currentMatchIndex, 4);
    console.log(this.state.currentMatchIndex, matches);
    return matches.map(match => (
      <div className="live-mathces">
        <LiveMatchSummary team1={match.team1} team2={match.team2} />
      </div>
    ));
  }

  getNextLiveMatch() {
    if (this.state.currentMatchIndex < this.state.matches.length - 4) {
      this.setState({
        currentMatchIndex: this.state.currentMatchIndex + 1
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <div className="row-margin">
            <div className="col-padding border-white" style={{ width: '20%'}}>
              <div className="side-header">get & bet</div>
              {this.getGames()}
            </div>
            <div className="col-padding border-white" style={{ width: '55%'}}>
              <div className="main-header">Match details</div>
              <div className="row-margin border-white">
                {this.getLiveMathces()}
                <div
                  className="next-live-match"
                  onClick={this.getNextLiveMatch}
                >
                  >>
                </div>
              </div>
            </div>
            <div className="col-padding border-white" style={{ width: '25%'}}>
              <div className="user-side-bar">
                <span className="username">shantiswarup</span>
              </div>
              <div className="placed-bets">placed bets</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
