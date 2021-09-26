import React from "react";
import ReactLoading from "react-loading";
import style from "../pages/Home/style.module.css";

class Loading extends React.Component {
  render() {
    return (
      <div className={style.loading}>
        <ReactLoading type="spinningBubbles" color="#ae9b77" width={50} />
      </div>
    );
  }
}
export default Loading;
