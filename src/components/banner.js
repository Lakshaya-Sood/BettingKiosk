import React from "react";

class Banner extends React.Component {

  render() {
    const { imageSrc } = this.props;
    return (
        <div className="main-header">
            <div>
                {imageSrc && <img style={{ height: 100, width: '100%' }} src={`data:image/png;base64,${imageSrc}`} />}
            </div>
            Banner Details
        </div>
    );
  }
}

export default Banner;
