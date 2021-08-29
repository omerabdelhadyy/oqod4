import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import ProgressBar from "@ramonak/react-progress-bar";

class realestate extends React.Component {
  render() {
    return (
      <div className={style.continerReal}>
        <h1 style={{ color: "#353840" }}>Find your project or liquidate</h1>
        <img
          className={style.imageFind}
          // style={{ borderRadius: 10, marginTop: 10 }}
          // src="https://png.pngtree.com/background/20210711/original/pngtree-network-information-electronic-technology-background-picture-image_1096792.jpg"
          // width={300}
          // height={144}
          src={this?.props?.linkImage}
        />
        <p className={style.pReal}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
      </div>
    );
  }
}

export default realestate;
