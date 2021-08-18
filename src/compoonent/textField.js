import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import style from "../pages/Register/style.module.css";

class textField extends React.Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }
  render() {
    const { label, value, placeHolder } = this.props;
    return (
      <div
        className={style.input1}
        style={{
          width: label == "Address" ? "100%" : "50%",
          margin: label == "Address" ? 0 : 10,
        }}
      >
        <h1 className={style.textLabel}>{label}</h1>
        {label != "Password" && label != "Repeat Password" ? (
          <TextField
            defaultValue={placeHolder}
            multiline={true}
            style={{ fontSize: 4 }}
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
        )}
      </div>
    );
  }
}

export default textField;
