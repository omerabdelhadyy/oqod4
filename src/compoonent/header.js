import React from "react";
import style from "../pages/Home/style.module.css";
import { Button } from "@material-ui/core";

class header extends React.Component {
  render() {
    return (
      <div className={style.viewHeader}>
        <img
          src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
          alt="oqod"
          width="160"
          height="55"
        />
        <a
          href={""}
          class="button"
          onClick={() => this.props.history.push("/")}
        >
          {`\r`} About
        </a>
        <a
          href={""}
          class="button"
          onClick={() => this.props.history.push("/")}
        >
          {`\r`} Home it works
        </a>
        <a
          href={""}
          class="button"
          onClick={() => this.props.history.push("/")}
        >
          {`\r`} Blogs
        </a>
        <a
          href={""}
          class="button"
          onClick={() => this.props.history.push("/")}
        >
          {`\r`} Countact Us
        </a>
        <Button
          onClick={() => this.props.push("Create")}
          style={{
            backgroundColor: "#AE9B77",
            fontSize: "12px",
            width: "17%",
            color: "#fff",
            textAlign: "center",
            textTransform: "capitalize",
            borderRadius: 10,
          }}
          variant="contained"
        >
          List Property
        </Button>
      </div>
    );
  }
}

export default header;
