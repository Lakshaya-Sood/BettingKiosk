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
    const { history } = this.props;
    history.push('/print');
    console.log("user placed bet on: ", this.state.selectedIndex);
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
            {match.betInfo.bet_name}
          </div>
          <div style={style}>{match.betInfo.rate}</div>
        </div>
      );
    });
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <div>
        {this.getMatchInfo()}
        {selectedIndex !== null ? <Button className={'place-bet'} content="Place Bet!" /> : <></>}
      </div>
    );
  }
}

export default MatchInfo;
