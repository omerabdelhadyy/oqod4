import React from "react";
import style from "../pages/Home/style.module.css";

class Footer extends React.Component {
  render() {
    return (
      <div className={style.footer}>
        <div>
          <img
            src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
            alt="oqod"
            width="160"
            height="55"
          />
        </div>
        <div className={style.continerAbout}>
          <div>
            <h2>
              <a
                style={{ color: "#fff" }}
                href={""}
                class="button"
                // onClick={() => this.props.history.push("/")}
              >
                About
              </a>
            </h2>
            <h2>
              <a
                style={{ color: "#fff" }}
                href={""}
                class="button"
                // onClick={() => this.props.history.push("/")}
              >
                How it works
              </a>
            </h2>
          </div>
          <div>
            <h2>
              <a
                style={{ color: "#fff" }}
                href={""}
                class="button"
                // onClick={() => this.props.history.push("/")}
              >
                Blog
              </a>
            </h2>
            <h2>
              <a
                style={{ color: "#fff" }}
                href={""}
                class="button"
                // onClick={() => this.props.history.push("/")}
              >
                Contact Us
              </a>
            </h2>
          </div>
        </div>
        <div className={style.textPrivacy}>
          <h2>
            <a
              style={{ color: "#fff" }}
              href={""}
              class="button"
              // onClick={() => this.props.history.push("/")}
            >
              Privacy Policy
            </a>
          </h2>
          <h2>
            <a
              style={{ color: "#fff" }}
              href={""}
              class="button"
              // onClick={() => this.props.history.push("/")}
            >
              Terms of Use
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

export default Footer;
