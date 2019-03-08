import React from "react";

class Banner extends React.Component {

  render() {
    return (
        <div className="main-header">
            <div>
                <img style={{ height: 100, width: '100%' }} src="http://lorempixel.com/500/500/people" />
            </div>
            Banner Details
        </div>
    );
  }
}

export default Banner;