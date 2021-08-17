import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import ProgressBar from "@ramonak/react-progress-bar";

class estate extends React.Component {
  render() {
    return (
      <div className={style.continer}>
        <h1 style={{ fontSize: 12 }}>Property #1</h1>
        <img
          style={{ borderRadius: 10, marginTop: 10 }}
          src="https://png.pngtree.com/background/20210711/original/pngtree-network-information-electronic-technology-background-picture-image_1096792.jpg"
          width={200}
          height={80}
        />
        <div className={style.divCArdRow}>
          <p>Price: $450</p>
          <Button
            style={{
              backgroundColor: "#AE9B77",
              fontSize: "6px",
              color: "#fff",
              textAlign: "center",
              textTransform: "capitalize",
              borderRadius: 5,
              // width: 70,
              // height: 20,
            }}
            variant="contained"
          >
            Buy
          </Button>
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
          <h1 style={{ fontSize: 10 }}>90%</h1>
        </div>
      </div>
    );
  }
}

export default estate;
