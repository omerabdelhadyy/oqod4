import React from "react";
import style from "./style.module.css";
import { Checkbox, Button } from "@material-ui/core";
import TextField from "../../compoonent/textField";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      Full_Name: "",
      Email: "",
      National_ID: "",
      Phone_Number: "",
      Password: "",
      Repeat_Password: "",
    };
  }
  onClickRegister = () => {
    console.log(this.state.Full_Name, this.state.Email);
  };
  render() {
    return (
      <div className={style.continer}>
        <div>
          <img
            src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
            alt="oqod"
            width="160"
            height="55"
          />
        </div>
        <div className={style.form}>
          <h1 className={style.textReg}>Registration</h1>
          <div className={style.line}></div>
          <div className={style.inputs}>
            <TextField
              width="100%"
              label="Full Name"
              value={(Full_Name) => this.setState({ Full_Name })}
            />
            <TextField
              width="100%"
              label="Email"
              value={(Email) => this.setState({ Email })}
            />
            <TextField
              width="100%"
              label="National ID"
              value={(National_ID) => this.setState({ National_ID })}
            />
            <TextField
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
              width="100%"
              label="Repeat Password"
              value={(Repeat_Password) => this.setState({ Repeat_Password })}
            />
            <div className={style.Checkbox}>
              <Checkbox color="default" style={{ padding: 0 }} />
              <p className={style.textAccept}>Accept Terms & Service</p>
            </div>
            <Button
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
              }}
              variant="contained"
            >
              Register
            </Button>
            <p>
              Already have an account ?
              <a
                href={""}
                class="button"
                onClick={() => this.props.history.push("/Login")}
              >
                {`\r`} Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
