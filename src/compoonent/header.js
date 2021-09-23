import React from "react";
import style from "../pages/Home/style.module.css";
import { Button } from "@material-ui/core";
import Logo from "../assets/images/Logo.png";
import { getItem, removeItem } from "../services/storage";

class header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount = async () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({ user: await getItem("userData") });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    // console.log(this.state.height);
  }

  signOut = async () => {
    await removeItem("userData");
    this.props.push("/Login");
  };

  render() {
    const { type } = this.props;
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
        {this.state?.user?.token ? (
          <>
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
            <button
              className={style.ButtonList}
              onClick={() => this.signOut()}
              style={{
                height: this.state.width > 900 ? this.state.width / 35 : 23,
                width: this.state.width > 900 ? this.state.width / 15 : 40,
                fontSize: this.state.width > 900 ? this.state.width / 100 : 7,
                backgroundColor: "#fff",
                color: "#ae9b77",
              }}
            >
              sign out
            </button>
            <button
              className={style.ButtonList}
              onClick={() => this.props.push("/Create")}
            >
              List Property
            </button>
          </>
        ) : (
          <div className={style.divButtonLogin}>
            <button
              onClick={() => this.props.push("/register")}
              className={style.ButtonList}
              style={{
                height: this.state.width > 900 ? this.state.width / 30 : 23,
                marginRight: 20,
                width: this.state.width / 10,
              }}
            >
              sign up
            </button>
            <button
              onClick={() => this.props.push("/Login")}
              style={{
                height: this.state.width > 900 ? this.state.width / 30 : 23,
                marginRight: 20,
                width: this.state.width / 10,
                backgroundColor: "#fff",
                color: "#ae9b77",
              }}
              className={style.ButtonList}
            >
              sign in
            </button>
          </div>
        )}

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
