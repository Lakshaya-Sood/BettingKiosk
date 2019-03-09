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
      matchInfo: [],
      games: [],
      banner: null,
    };
    autobind(this);
  }

  componentDidMount() {
    fetch('http://192.168.43.100:8080/getMatches')
    .then(response => response.json())
    .then(json=>this.setState({games:json}))
  }

  getLiveBets(retryCount) {
    if(retryCount < 5 ) {
      const evtSource = new EventSource('sse.php');
      evtSource.onmessage = (data) => {
        console.log(e.data);
      }
      evtSource.onerror = (err) => {
        console.log(error);
        retryCount++;
      }
    }
  }

  getGames() {
    return this.state.games.map((game, index) => (
      <GameName
        id={index}
        key={index + "_games"}
        name={game.sportName}
        imageSrc={game.icon}
        onClick={() =>
          this.setState({
            currentGameIndex: index,
            matchInfo: [],
            banner: null,
          })
        }
      />
    ));
  }

  getMatchInfo(matchId, banner) {
    const url = `http://192.168.43.100:8080/getTeams?matchId=${matchId}`;
    fetch(url)
    .then(response => response.json())
    .then(json=>{
      const matchInfo = json.details.map(match => ({
        name: match,
        rate: 5,
        bet_name: 'win',
      }));
      this.setState({
        matchInfo,
        banner,
      })
    })
    // this.setState({
    //   matchInfo: MATCHES
    // });
  }

  render() {
    console.log(this.state.matchInfo);
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
              <Banner imageSrc={this.state.banner}/>
              <div className="row-margin border-white">
                <LiveMatchList
                  getMatchInfo={this.getMatchInfo}
                  // games={this.state.games}
                  games={(this.state.games.length > 0 && this.state.games) || GAMES}
                  currentGameIndex={currentGameIndex}
                />
              </div>
              <MatchInfo matches={this.state.matchInfo} {...this.props}/>
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
