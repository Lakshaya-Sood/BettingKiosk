import React from "react";
import "./user_profile.scss";

var user = {
  basicInfo: {
    name: "Jane Doe",
    gender: "Female",
    birthday: "April 3, 1990",
    location: "Los Angeles, CA",
    photo: "http://lorempixel.com/500/500/people",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."
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
          <h3>{info.location}</h3>

          <hr />
          <p>
            {info.gender} | {info.birthday}
          </p>
        </div>

        <div className="bottom">
          <h4>Biography</h4>
          <p>{info.bio}</p>
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
