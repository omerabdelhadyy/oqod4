import React from "react";
import style from "../Register/style.module.css";
import { Checkbox, Button } from "@material-ui/core";
import TextField from "../../compoonent/textField";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
    };
  }
  onClickLogin = () => {
    this.props.history.push("/Home");
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
          <h1 className={style.textReg}>Log in</h1>
          <div className={style.line}></div>
          <div className={style.inputs}>
            <TextField
              label="Email"
              value={(Email) => this.setState({ Email })}
            />

            <TextField
              label="Password"
              value={(Password) => this.setState({ Password })}
            />

            <Button
              onClick={() => this.onClickLogin()}
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
              Log in
            </Button>
            <p>
              Don’t have an account yet?
              <a
                href={""}
                class="button"
                onClick={() => this.props.history.push("/")}
              >
                {`\r`} Register
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
