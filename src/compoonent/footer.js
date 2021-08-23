import React from "react";
import style from "../pages/Home/style.module.css";

class Footer extends React.Component {
  render() {
    return (
      <div className={style.footer}>
        <div>
          <img
            className={style.LogoFooter}
            src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
            alt="oqod"
          />
        </div>
        <div className={style.continerAbout}>
          <div>
            <p
            // onClick={() => this.props.history.push("/")}
            >
              About
            </p>
            <p

            // onClick={() => this.props.history.push("/")}
            >
              How it works
            </p>
          </div>
          <div>
            <p
            // onClick={() => this.props.history.push("/")}
            >
              Blog
            </p>

            <p
            // onClick={() => this.props.history.push("/")}
            >
              Contact Us
            </p>
          </div>
        </div>
        <div className={style.textPrivacy}>
          <p
          // onClick={() => this.props.history.push("/")}
          >
            Privacy Policy
          </p>

          <p
          // onClick={() => this.props.history.push("/")}
          >
            Terms of Use
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
