import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import ProgressBar from "@ramonak/react-progress-bar";

class estate extends React.Component {
  render() {
    return (
      <div className={style.continer}>
        <h1 className={style.textProperty}>Property #1</h1>
        <img
          className={style.ImageCard}
          src="https://ap.rdcpix.com/cfb0064b155a8f8d4bfb05e6722020efl-m3439388063od-w480_h360_x2.webp"
        />
        <div className={style.divCArdRow}>
          <p>Price: $450</p>
          <button className={style.ButtonList}>Buy</button>
        </div>
        <div className={style.divProgressBar}>
          <ProgressBar
            completed={80}
            className={style.ProgressBar}
            labelSize={10}
            height={4}
            margin={10}
            width={"80%"}
            isLabelVisible={false}
            baseBgColor="#EFF3F5"
            bgColor="#46DD67"
          />
          <h1 className={style.textProgress}>90%</h1>
        </div>
      </div>
    );
  }
}

export default estate;
