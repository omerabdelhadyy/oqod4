import React from "react";
import style from "./style.module.css";
import KeyboardArrowLeftSharp from "@material-ui/icons/KeyboardArrowLeftSharp";
import KeyboardArrowRightSharp from "@material-ui/icons/KeyboardArrowRightSharp";

class transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    // console.log(this.state.height);
  }
  render() {
    return (
      <div className={style.continer}>
        <div
          className={style.iconeArrow}
          style={{
            height: this.state.width < 900 ? this.state.width / 18 : 40,
            width: this.state.width < 900 ? this.state.width / 18 : 45,
          }}
        >
          <KeyboardArrowLeftSharp
            style={{
              marginTop: 8,
              fontSize: this.state.width < 900 ? this.state.width / 35 : 26,
            }}
          />
        </div>
        <h2
          style={{
            fontSize: this.state.width < 900 ? this.state.width / 60 : 16,
          }}
        >
          transaction
        </h2>
        <h2
          style={{
            fontSize: this.state.width < 900 ? this.state.width / 60 : 16,
          }}
        >
          transaction
        </h2>
        <h2
          style={{
            fontSize: this.state.width < 900 ? this.state.width / 60 : 16,
          }}
        >
          transaction
        </h2>
      </div>
    );
  }
}

export default transaction;
