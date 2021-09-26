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
    } = this.props;
    return (
      <button
        onClick={onClick}
        className={style.Button}
        style={{ height, width, backgroundColor, color, fontSize }}
        //   onClick={() => this.signOut()}
        //   style={{
        //     height: this.state.width > 900 ? this.state.width / 35 : 23,
        //     width: this.state.width > 900 ? this.state.width / 15 : 40,
        //     fontSize: this.state.width > 900 ? this.state.width / 100 : 7,
        //     backgroundColor: "#fff",
        //     color: "#ae9b77",
        //   }}
      >
        {textButton}
      </button>
    );
  }
}

export default button;
