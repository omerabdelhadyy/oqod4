import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "../../assets/images/22.png";

class estate extends React.Component {
  render() {
    return (
      <div className={style.continer}>
        <h1 className={style.textProperty}>Property #1</h1>
        <img
          className={style.ImageCard}
          // src="https://ap.rdcpix.com/cfb0064b155a8f8d4bfb05e6722020efl-m3439388063od-w480_h360_x2.webp"
          src={Image}
          // src="https://s3-alpha-sig.figma.com/img/f64a/3058/854db4c9bb7cb383c754ea234b34c894?Expires=1630886400&Signature=G0pgIKpuZyOafY1tIZfLpeHGZlc~NPJfnWz2CCq4VP3PxlYqpZ0Hl~kLHvx2NNz049qI104HpfWTEuStA8Pv8PqmFLkeQzIoqbLQ38o2AjkO1xUwMXf0vurZ70A90teLDgEKbDqfpKtrieji6WgvPoc27pT1b6VgfJlxGtCEao9xNc5b~lfcYW0fgwWiXuFhC4tYTrbya3LfOkI8nUtvp~bf36WXdF~w93gaF2aeGVVmAMX0NTX51khmO1s2H5bFEXOEFlQqzHEfWiJPapSVf0KYtAUsMrOvcSh9Kqf3bZ~kKKFbuBM7KcQgRGcTVa1dk-GdD8wBeenMqLRLOTqWUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
