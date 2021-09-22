import React from "react";
import style from "./style.module.css";
import { Checkbox, Button } from "@material-ui/core";
import TextField from "../../compoonent/textField";
import Logo from "../../assets/images/Logo.png";
import { post } from "../../services/axios";
import Popup from "../../compoonent/popup";
class Register extends React.Component {
  componentDidMount() {
    // localStorage.setItem("lastname", "testttomer");
  }
  testStorge = async () => {
    // let test = await localStorage.getItem("lastname");
    // console.log(test);
  };
  constructor() {
    super();
    this.state = {
      Full_Name: "",
      Email: "",
      National_ID: "",
      Phone_Number: "",
      Password: "",
      Repeat_Password: "",
      errorMessage: null,
      checked: false,
    };
  }
  onClickRegister = () => {
    const { Full_Name, Phone_Number, Password, Email, Repeat_Password } =
      this.state;
    console.log(this.state.Full_Name, this.state.Email);
    let body = {
      name: Full_Name,
      phoneNumber: Phone_Number,
      password: Password == Repeat_Password ? Password : null,
      email: Email,
    };
    console.log("pass", this.state.Password);
    post("auth/register", body)
      .then((res) => {
        this.props.history.push("/Login");
        console.log("res", res?.data);
      })
      .catch((error) => {
        this.setState({
          errorMessage:
            error.response.data?.data?.[0] || error?.response?.data.message,
        });
        console.log("error", error?.response?.data);
      });
  };
  render() {
    return (
      <div className={style.continer}>
        <Popup />
        <div>
          <img
            src={Logo}
            // src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
            alt="oqod"
            width="150"
            height="50"
          />
        </div>
        <div className={style.form}>
          <h1 className={style.textReg}>Registration</h1>
          <div className={style.line}></div>
          <div className={style.inputs}>
            <form
              onKeyPress={(e) => {
                // console.log(e);
                if (e?.key === "Enter" && this.state.checked) {
                  this?.onClickRegister?.();
                }
              }}
            >
              <TextField
                disablemultiline
                width="100%"
                label="Full Name"
                value={(Full_Name) => this.setState({ Full_Name })}
              />
              <TextField
                disablemultiline
                width="100%"
                label="Email"
                value={(Email) => this.setState({ Email })}
              />
              <TextField
                disablemultiline
                width="100%"
                label="National ID"
                value={(National_ID) => this.setState({ National_ID })}
              />
              <TextField
                disablemultiline
                width="100%"
                label="Phone Number"
                value={(Phone_Number) => this.setState({ Phone_Number })}
              />
              <TextField
                width="100%"
                label="Password"
                value={(Password) => this.setState({ Password })}
              />
              <TextField
                disablemultiline
                width="100%"
                label="Repeat Password"
                value={(Repeat_Password) => this.setState({ Repeat_Password })}
              />
            </form>
            <div className={style.Checkbox}>
              <Checkbox
                color="default"
                style={{ padding: 0 }}
                onChange={(event) =>
                  this.setState({ checked: event.target.checked })
                }
              />
              <p className={style.textAccept}>Accept Terms & Service</p>
            </div>
            {this.state.errorMessage?.length && (
              <p className={style.errorMessage}>{this.state.errorMessage}</p>
            )}
            <Button
              disabled={!this.state.checked}
              // onClick={() => this.testStorge()}
              onClick={() => this.onClickRegister()}
              style={{
                backgroundColor: "#AE9B77",
                fontSize: "15px",
                width: "50%",
                marginbottom: 20,
                color: "#fff",
                textAlign: "center",
                textTransform: "capitalize",
                marginTop: 10,
                opacity: !this.state.checked ? 0.6 : 1,
              }}
              variant="contained"
            >
              Register
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // backgroundColor: "red",
                marginTop: 0,
                paddingTop: 0,
              }}
            >
              <p style={{ fontSize: 13, padding: 0 }}>
                Already have an account ?
              </p>

              <p
                style={{
                  cursor: "pointer",
                  marginLeft: 3,
                  color: "#A79570",
                  fontSize: 13,
                  padding: 0,
                }}
                onClick={() => this.props.history.push("/Login")}
              >
                Log in
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
