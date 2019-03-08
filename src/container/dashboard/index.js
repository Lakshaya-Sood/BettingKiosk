import React from "react";
import autobind from "react-autobind";
import GameName from "../../components/game_name";
import UserProfile from "../../components/user_profile";
import LiveMatchList from "../../components/live_match_list";
import MatchInfo from "../../components/match_info";
import SideHeader from "../../components/side_header";
import Banner from "../../components/banner";
import { GAMES } from "../../assets/dummy_data/games";
import { MATCHES } from "../../assets/dummy_data/matches";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGameIndex: 0,
      matchInfo: []
    };
    autobind(this);
  }

  getGames() {
    return GAMES.map((game, index) => (
      <GameName
        id={index}
        key={index + "_games"}
        name={game.sports_name}
        onClick={() =>
          this.setState({
            currentGameIndex: index
          })
        }
      />
    ));
  }
  getMatchInfo(matchId) {
    this.setState({
      matchInfo: MATCHES
    });
  }

  render() {
    let { currentGameIndex } = this.state;
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
                <LiveMatchList
                  getMatchInfo={this.getMatchInfo}
                  games={GAMES}
                  currentGameIndex={currentGameIndex}
                />
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
