import React from "react";
import style from "../pages/Home/style.module.css";
import { Button } from "@material-ui/core";
import Logo from "../assets/images/Logo.png";
import { getItem } from "../services/storage";

class header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }
  componentDidMount = async () => {
    this.setState({ user: await getItem("userData") });
    // console.log(await getItem("userData"));
    // console.log(await getItem("userData"));
  };
  render() {
    const { type } = this.props;
    return (
      <div className={style.viewHeader}>
        <img
          src={Logo}
          // onClick={() => this.props.push("/Home")}
          className={style.Logo}
          // src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
          alt="oqod"
          width="160"
          height="55"
        />
        <p
          className={style.ButtonHeader}
          style={{ color: type == "About" ? "#003F88" : "#6e737e" }}

          // onClick={() => this.props.history.push("/")}
        >
          About
        </p>
        <p
          className={style.ButtonHeader}
          onClick={() => this.props.push("/Home")}
          style={{ color: type == "home" ? "#003F88" : "#6e737e" }}
        >
          Home it works
        </p>
        <p
          className={style.ButtonHeader}
          // onClick={() => this.props.push("/ProtfolioValue")}
          style={{ color: type == "Blogs" ? "#003F88" : "#6e737e" }}
        >
          Blogs
        </p>
        <p
          className={style.ButtonHeader}
          // onClick={() => this.props.history.push("/")}
          style={{ color: type == "Countact" ? "#003F88" : "#6e737e" }}
        >
          Countact Us
        </p>
        <div
          className={style.divUserCard}
          onClick={() => this.props.push("/profile")}
          style={{ color: type == "profile" ? "#003F88" : "#6e737e" }}
        >
          <img
            className={style.ImageUser}
            src="https://images.all-free-download.com/images/graphicthumb/man_in_the_hat_202625.jpg"
          />
          Welcom {this.state.user?.user?.name}
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
