import React from "react";
import style from "../pages/Home/style.module.css";

class button extends React.Component {
  render() {
    const {
      width,
      height,
      backgroundColor,
      color,
      fontSize,
      onClick,
      textButton,
      disabled,
      opacity,
      incoming,
    } = this.props;
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={style.Button}
        style={{
          height,
          width,
          backgroundColor,
          color,
          fontSize,
          opacity,
          border: incoming && "none",
        }}
      >
        {textButton}
      </button>
    );
  }
}

export default button;
