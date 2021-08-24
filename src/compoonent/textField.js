import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import style from "../pages/Register/style.module.css";

class textField extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      showPassword: false,
      income: true,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    // console.log(this.state.height);
  }
  render() {
    const { label, value, placeHolder, width, income } = this.props;
    return (
      <div
        className={style.input1}
        style={{
          width: width,
          margin: label == "Address" ? 0 : 10,
        }}
      >
        <h1
          className={style.textLabel}
          style={{
            fontSize: this.state.width < 800 ? this.state.width / 60 : 14,
          }}
        >
          {label}
        </h1>
        {label == "Generetic Income" && (
          <div className={style.divIncome}>
            <div
              className={style.divYes}
              onClick={() => {
                this.setState({ income: true });
                income?.(true);
              }}
            >
              <div className={style.divSelectYes}>
                {this.state.income && (
                  <div
                    style={{
                      backgroundColor: "#B09E7A",
                      height: "100%",
                      width: "100%",
                      borderRadius: 50,
                    }}
                  ></div>
                )}
              </div>
              <p className={style.textYes}>yes</p>
            </div>
            <div
              className={style.divYes}
              onClick={() => {
                this.setState({ income: false });
                income?.(false);
              }}
            >
              <div className={style.divSelectYes}>
                {!this.state.income && (
                  <div
                    style={{
                      backgroundColor: "#B09E7A",
                      height: "100%",
                      width: "100%",
                      borderRadius: 50,
                    }}
                  ></div>
                )}
              </div>
              <p className={style.textYes}>no</p>
            </div>
          </div>
        )}
        {this.state.income ? (
          label != "Password" && label != "Repeat Password" ? (
            <TextField
              InputLabelProps={{
                style: {
                  fontSize: this.state.width < 800 ? this.state.width / 60 : 14,
                  // backgroundColor: "red",
                },
              }}
              InputProps={{
                style: {
                  fontSize: this.state.width < 800 ? this.state.width / 50 : 20,
                },
              }}
              defaultValue={placeHolder}
              multiline={true}
              // style={{ fontSize: 0, color: "red" }}
              disabled={label == "Address" && true}
              onChange={(t) => value(t.target.value)}
              id="filled-basic"
              label={label != "Address" && label}
              variant="outlined"
              className={style.TextField}
              size="small"
            />
          ) : (
            <TextField
              // style={{ fontSize: 0 }}
              id="filled-basic"
              label={label}
              variant="outlined"
              className={style.TextField}
              size="small"
              type={this.state?.showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{ fontSize: 3 }}
                      size={2}
                      aria-label="toggle password visibility"
                      onClick={() =>
                        this.setState({
                          showPassword: !this.state?.showPassword,
                        })
                      }
                      // onMouseDown={handleMouseDownPassword}
                    >
                      {this.state?.showPassword ? (
                        <Visibility style={{ fontSize: 20 }} />
                      ) : (
                        <VisibilityOff style={{ fontSize: 20 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )
        ) : null}
      </div>
    );
  }
}

export default textField;
