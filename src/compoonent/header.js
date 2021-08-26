import React from "react";
import style from "../pages/Home/style.module.css";
import { Button } from "@material-ui/core";
import Logo from "../assets/images/Logo.png";

class header extends React.Component {
  render() {
    return (
      <div className={style.viewHeader}>
        <img
          src={Logo}
          onClick={() => this.props.push("/Home")}
          className={style.Logo}
          // src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
          alt="oqod"
          width="160"
          height="55"
        />
        <p
          className={style.ButtonHeader}
          // onClick={() => this.props.history.push("/")}
        >
          About
        </p>
        <p
          className={style.ButtonHeader}
          onClick={() => this.props.push("/HomeWorks")}
        >
          Home it works
        </p>
        <p
          className={style.ButtonHeader}
          // onClick={() => this.props.history.push("/")}
        >
          Blogs
        </p>
        <p
          className={style.ButtonHeader}
          // onClick={() => this.props.history.push("/")}
        >
          Countact Us
        </p>
        <div
          className={style.divUserCard}
          onClick={() => this.props.push("/profile")}
        >
          <img
            className={style.ImageUser}
            src="https://images.all-free-download.com/images/graphicthumb/man_in_the_hat_202625.jpg"
          />
          Welcom omer
        </div>
        {/* <div className={style.ButtonList}> */}
        <button
          className={style.ButtonList}
          onClick={() => this.props.push("/Create")}
        >
          List Property
        </button>

        {/* <Button
            onClick={() => this.props.push("/Create")}
            style={{
              backgroundColor: "#AE9B77",
              fontSize: "12px",
              //   width: "17%",
              color: "#fff",
              textAlign: "center",
              textTransform: "capitalize",
              borderRadius: 10,
            }}
            variant="contained"
          >
            List Property
          </Button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default header;
