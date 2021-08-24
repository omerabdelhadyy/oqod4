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
            <h2
            // onClick={() => this.props.history.push("/")}
            >
              About
            </h2>
            <h2
              onClick={() => this.props.push("/HomeWorks")}

              //  onClick={() => this.props.history.push("/")}
            >
              How it works
            </h2>
          </div>
          <div>
            <h2
            // onClick={() => this.props.history.push("/")}
            >
              Blog
            </h2>

            <h2
            // onClick={() => this.props.history.push("/")}
            >
              Contact Us
            </h2>
          </div>
        </div>
        <div className={style.textPrivacy}>
          <h2
          // onClick={() => this.props.history.push("/")}
          >
            Privacy Policy
          </h2>

          <h2
          // onClick={() => this.props.history.push("/")}
          >
            Terms of Use
          </h2>
        </div>
      </div>
    );
  }
}

export default Footer;
