import React from "react";
import autobind from "react-autobind";
import './match_info.css';
import Button from '../button';

const style = { width: "33.36%", margin: "5" };

class MatchInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: null };

    autobind(this);
  }

  onBetclick(index) {
    let { selectedIndex } = this.state;
    if (selectedIndex == index) {
      this.setState({ selectedIndex: null });
    } else {
      this.setState({ selectedIndex: index });
    }
  }
  placeBet() {
    const { history, matchId } = this.props;
    const item = this.props.matches[this.state.selectedIndex];
    // history.push('/print');
    const paylaod = {
      email:'abc.def@gmail.com',
      sessionId: 'session1',
      kioskId: 'kiosk1',
      matchId,
      bet: {
        teamId: item.name,
        "amount_placed": 3,
        "betType":"win",
        "amount_due": 300
      }
    }
    fetch('http://192.168.43.100:8080/placeBet', {
      method: 'POST',
      body: JSON.stringify(paylaod),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.text())
    .then(res => {console.log(res);
      fetch('http://192.168.43.61:8000/generateBetQR', {
        method: 'POST',
        body: JSON.stringify({email: 'abc.def@gmail.com',
                betId: 'safkjaf',
                kioskId: 'kiosk1',
                matchId,
                amountDue: '100',
                }),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response => response.text())
      .then(res=> history.push({
        pathname: '/print',
        state: {qrDate:res}
      }))
      .catch(err=>console.log(err))
    })
    .catch(err => console.log(err))
    console.log("user placed bet on: ", this.props.matches[this.state.selectedIndex]);

  }
  getMatchInfo() {
    const { matches } = this.props;
    const { selectedIndex } = this.state;
    const self = this;
    return matches.map((match, index) => {
      let styleMain = {
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottom: "1px solid white"
      };
      if (selectedIndex == index) {
        styleMain = {
          ...styleMain,
          backgroundColor: "#636382"
        };
      }
      return (
        <div
          key={"bet_uq_" + index}
          className="row-margin"
          style={styleMain}
          onClick={() => self.onBetclick(index)}
        >
          <div style={{ ...style, borderRight: "1px solid white" }}>
            {match.name}
          </div>
          <div style={{ ...style, borderRight: "1px solid white" }}>
            {match.bet_name || 'win'}
          </div>
          <div style={style}>{(match.rate !== null && match.rate !== undefined) ? match.rate : 5}</div>
        </div>
      );
    });
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <div>
        {this.getMatchInfo()}
        {selectedIndex !== null ? <Button className={'place-bet'} content="Place Bet!" onClick={this.placeBet} /> : <></>}
      </div>
    );
  }
}

export default MatchInfo;
