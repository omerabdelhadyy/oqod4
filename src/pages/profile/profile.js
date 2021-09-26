import React from "react";
import style from "./style.module.css";
import Header from "../../compoonent/header";
import TextField from "../../compoonent/textField";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ButtonCom from "../../compoonent/button";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount = async () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <>
        <div className={style.continer}>
          <Header push={this.props.history.push} type="profile" />
          <h1
            style={{
              textAlign: "left",
              fontSize: 24,
              color: "#353840",
              fontWeight: 600,
              paddingTop: 30,
              paddingLeft: 10,
            }}
          >
            My Profile
          </h1>
          <div className={style.inputsProfile}>
            <div style={{ position: "relative", alignItems: "center" }}>
              <img
                className={style.ImageUser}
                src="https://images.all-free-download.com/images/graphicthumb/man_in_the_hat_202625.jpg"
              />
              <div className={style.divEditImage}>
                <EditIcon
                  className={style.IconEdit}
                  style={{ fontSize: 20, color: "#000" }}
                />
              </div>
              <h1 className={style.textEdit}>Edit Profile</h1>
              {/* <button
                className={style.buttonProtfolio}
                onClick={() => this.props.history.push("/ProtfolioValue")}
              >
                Protfolio Value
              </button> */}
              <div
                style={{
                  marginTop: "5%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ButtonCom
                  textButton="Protfolio Value"
                  onClick={() => this.props.history.push("/ProtfolioValue")}
                  // backgroundColor="#fff"
                  // color="#ae9b77"
                  height={this.state.width > 1200 ? this.state.width / 32 : 33}
                  width={this.state.width > 1200 ? this.state.width / 9 : 100}
                  fontSize={
                    this.state.width > 900 ? this.state.width / 100 : 10
                  }
                />
              </div>
            </div>
            <div className={style.inputs}>
              <TextField
                width="95%"
                label="Full Name"
                value={(Full_Name) => this.setState({ Full_Name })}
              />
              <TextField
                width="95%"
                label="Email"
                value={(Email) => this.setState({ Email })}
              />
              <TextField
                width="95%"
                label="Company Name"
                value={(Company_Name) => this.setState({ Company_Name })}
              />
              <TextField
                width="95%"
                label="Phone Number"
                value={(Phone_Number) => this.setState({ Phone_Number })}
              />
              <TextField
                width="95%"
                label="Password"
                value={(Password) => this.setState({ Password })}
              />
              <Button
                // onClick={() => this.onClickRegister()}
                style={{
                  backgroundColor: "#AE9B77",
                  fontSize: "13px",
                  width: "95%",
                  marginbottom: 30,
                  color: "#fff",
                  textAlign: "center",
                  textTransform: "capitalize",
                  marginTop: 10,
                  // marginLeft: 10,
                  padding: 10,
                }}
                variant="contained"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
