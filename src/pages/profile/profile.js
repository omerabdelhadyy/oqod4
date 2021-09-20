import React from "react";
import style from "./style.module.css";
import Header from "../../compoonent/header";
import TextField from "../../compoonent/textField";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

class Profile extends React.Component {
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
              <button
                className={style.buttonProtfolio}
                onClick={() => this.props.history.push("/ProtfolioValue")}
              >
                Protfolio Value
              </button>
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
