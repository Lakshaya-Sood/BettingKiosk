import React from "react";
class Button extends React.Component {
  render() {
    const { variant, content, ...others } = this.props;

    return (
      <button className={variant} {...others}>
        {content}
      </button>
    );
  }
}
