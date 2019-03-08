import React from "react";
import autobind from "react-autobind";
import GameName from "../../components/game_name";
import UserProfile from "../../components/user_profile";
import _ from "lodash";
import LiveMatchSummary from "../../components/live_match_summary";
import MatchInfo from '../../components/match_info';
import SideHeader from '../../components/side_header';
import Banner from '../../components/banner';
import { GAMES } from '../../assets/dummy_data/games';
import { MATCHES } from '../../assets/dummy_data/matches';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMatchIndex: 0,
      currentGameIndex: 0,
      matchInfo: [],
    };
    autobind(this);
  }

  getGames() {
    return GAMES.map((game, index) => 
    <GameName
      id={index}
      name={game.sports_name}
      onClick={() => this.setState({
        currentGameIndex: index,
      })}
    />);
  }

  getMatchInfo(matchId) {
    this.setState({
      matchInfo: MATCHES,
    })
  }

  getLiveMathces() {
    console.log(this.state.currentGameIndex)
    const matchClones = _.clone(GAMES[this.state.currentGameIndex].matches);
    const matches = matchClones.splice(this.state.currentMatchIndex, 4);
    console.log(this.state.currentMatchIndex, matches);
    return matches.map((match, index) => (
      <div className="live-mathces" id={index}>
        <LiveMatchSummary name={match.match_name} onClick={() => this.getMatchInfo(match.match_id)}/>
      </div>
    ));
  }

  getNextLiveMatch() {
    const matches = GAMES[this.state.currentGameIndex].matches;
    if (this.state.currentMatchIndex < matches.length - 4) {
      this.setState({
        currentMatchIndex: this.state.currentMatchIndex + 1
      });
    }
  }

  getPrevLiveMatch() {
    const matches = GAMES[this.state.currentGameIndex].matches;
    if (this.state.currentMatchIndex > 0) {
      this.setState({
        currentMatchIndex: this.state.currentMatchIndex -1
      });
    }
  }

  render() {
    const matches = GAMES[this.state.currentGameIndex].matches;
    return (
      <div className="App">
        <div>
          <div className="row-margin" style={{ height: "99.3vh" }}>
            <div className="col-padding border-white" style={{ width: "20%" }}>
              <SideHeader />
              {this.getGames()}
            </div>
            <div className="col-padding border-white" style={{ width: "55%" }}>
              <Banner />
              <div className="row-margin border-white">
                <div
                    className="next-live-match"
                    onClick={this.getPrevLiveMatch}
                    style={matches.length < 4 || this.state.currentMatchIndex === 0 ? {color: 'grey'} : null}
                  >
                    <div style={{padding: '15px'}}>{'<<'}</div>
                  </div>
                {this.getLiveMathces()}
                <div
                  className="next-live-match"
                  style={matches.length < 4 || this.state.currentMatchIndex === matches.length - 4 ? {color: 'grey'} : null}
                  onClick={this.getNextLiveMatch}
                >
                  <div style={{padding: '15px'}}>{'>>'}</div>
                </div>
              </div>
              <MatchInfo matches={this.state.matchInfo} />
            </div>
            <div className="c1ol-padding border-white" style={{ width: "25%" }}>
              <div className="user-side-bar">
                <UserProfile />
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