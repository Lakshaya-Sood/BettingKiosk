import React from "react";

class SideHeader extends React.Component {

  render() {
    return (
        <div className="side-header">
            <div>
                <img style={{ height: 100, width: 100 }} src={require('../assets/images/image4.png')} />
            </div>
            get & bet
        </div>
    );
  }
}

export default SideHeader;
