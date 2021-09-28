import React from "react";
import style from "./style.module.css";
import KeyboardArrowLeftSharp from "@material-ui/icons/KeyboardArrowLeftSharp";
import KeyboardArrowRightSharp from "@material-ui/icons/KeyboardArrowRightSharp";
import { getItem } from "../../services/storage";

class transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      user: [],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount = async () => {
    this.setState({ user: await getItem("userData") });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    // console.log(this.state.height);
  }
  render() {
    const { user } = this.state;
    const { data } = this.props;
    return (
      <div
        className={style.continer}
        style={{
          backgroundColor: data?.ownerId == user?.user?.id ? "#fff" : "#faf7f7",
        }}
      >
        <div
          className={style.iconeArrow}
          style={{
            height: this.state.width < 900 ? this.state.width / 18 : 40,
            width: this.state.width < 900 ? this.state.width / 18 : 45,
            backgroundColor:
              data?.ownerId == user?.user?.id ? "#EAEEED" : "#EDE4E4",
          }}
        >
          {data?.ownerId == user?.user?.id ? (
            <KeyboardArrowLeftSharp
              style={{
                marginTop: 8,
                fontSize: this.state.width < 900 ? this.state.width / 35 : 26,
              }}
            />
          ) : (
            <KeyboardArrowRightSharp
              style={{
                marginTop: 8,
                fontSize: this.state.width < 900 ? this.state.width / 35 : 26,
              }}
            />
          )}
        </div>
        <h2
          style={{
            fontSize: this.state.width < 900 ? this.state.width / 60 : 16,
            // backgroundColor: "red",
            width: "15%",
            textAlign: "center",
          }}
        >
          {data?.ownerId == user?.user?.id
            ? "Receive Salary"
            : `Payment to ${data?.ownerUser?.name}`}
        </h2>

        <h2
          style={{
            fontSize: this.state.width < 900 ? this.state.width / 60 : 16,
          }}
        >
          {new Date(`${data?.createdAt}`).toISOString().substring(0, 10)}
        </h2>
        <h2
          style={{
            fontSize: this.state.width < 900 ? this.state.width / 60 : 16,
          }}
        >
          {data?.quantity} tokens
        </h2>
        <h2
          style={{
            fontSize: this.state.width < 900 ? this.state.width / 60 : 16,
            color: data?.ownerId == user?.user?.id ? "#000" : "#933E38",
            fontWeight: 750,
          }}
        >
          ${data?.quantity * data?.price}
        </h2>
      </div>
    );
  }
}

export default transaction;
