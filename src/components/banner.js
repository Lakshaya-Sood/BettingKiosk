import React from "react";

class Banner extends React.Component {

  render() {
    const { url } = this.props;
    return (
        <div className="main-header">
            <div>
                <img style={{ height: 100, width: '100%' }} src={`data:image/png;base64,${(url || '')}`} />
            </div>
            Banner Details
        </div>
    );
  }
}

export default Banner;