import React from "react";
import style from "../Register/style.module.css";
import { Checkbox, Button } from "@material-ui/core";
import TextField from "../../compoonent/textField";
import Logo from "../../assets/images/Logo.png";
import { post } from "../../services/axios";
import { setItem } from "../../services/storage";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "0",
      error: false,
    };
  }
  componentDidMount = () => {
    // window.onpopstate = (e) => {
    //   if (e?.srcElement?.location?.pathname === "/Home") {
    //     this.props.history.push("/Home");
    //   }
    // };
  };
  onClickLogin = () => {
    // e.preventDefault();
    this.setState({ error: false });
    const { Password, Email } = this.state;
    let body = {
      password: Password,
      email: Email,
    };
    post("auth/login", body)
      .then((res) => {
        this.setState({ error: false });
        setItem("userData", res?.data?.data);
        this.props.history.push("/Home");
      })
      .catch((error) => {
        this.setState({ error: true });
        console.log("error", error?.response?.data);
      });
  };

  render() {
    return (
      <div className={style.continer}>
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
          <h1 className={style.textReg}>Log in</h1>
          <div className={style.line}></div>
          <div className={style.inputs}>
            <form
              onKeyPress={(e) => {
                // console.log(e);
                if (e?.key === "Enter") {
                  this?.onClickLogin?.();
                }
              }}
            >
              <TextField
                disablemultiline
                width="100%"
                label="Email"
                value={(Email) => this.setState({ Email })}
              />

              <TextField
                width="100%"
                label="Password"
                value={(Password) => this.setState({ Password })}
              />
            </form>
            {this.state.error && (
              <p className={style.errorMessage}>Wrong email or password</p>
            )}

            <Button
              type="submit"
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: 13 }}>Don’t have an account yet ?</p>

              <p
                style={{
                  fontSize: 13,
                  cursor: "pointer",
                  marginLeft: 3,
                  color: "#A79570",
                }}
                onClick={() => this.props.history.push("/register")}
              >
                Register
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
