import React from "react";
import "./user_profile.scss";

var user = {
  basicInfo: {
    name: "Jane Doe",
    photo: "http://lorempixel.com/500/500/people",
    balance : 500
  }
};

class Avatar extends React.Component {
  render() {
    var image = this.props.image,
      style = {
        width: this.props.width || 50,
        height: this.props.height || 50
      };

    if (!image) return null;

    return (
      <div className="avatar" style={style}>
        <img src={this.props.image} />
      </div>
    );
  }
}

class MainPanel extends React.Component {
  render() {
    var info = this.props.info;
    if (!info) return null;

    return (
      <div>
        <div className="top">
          <Avatar image={info.photo} width={100} height={100} />
          <h2>{info.name}</h2>
          <hr />
        </div>

        <div className="bottom">
          <h4>BALANCE</h4>
          <p>{info.balance}</p>
        </div>
      </div>
    );
  }
}

class UserProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user.basicInfo} />
      </div>
    );
  }
}

export default UserProfile;
