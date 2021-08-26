import React from "react";
import style from "../pages/Home/style.module.css";
import Logo from "../assets/images/LogoWhite.png";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
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
    return (
      <div className={style.footer}>
        <div>
          <img
            src={Logo}
            className={style.LogoFooter}
            // src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
            alt="oqod"
          />
        </div>
        <div className={style.continerAbout}>
          <div>
            <h2
              style={{
                fontSize: this.state.width < 900 ? this.state.width / 60 : 15,
              }}
              // onClick={() => this.props.history.push("/")}
            >
              About
            </h2>
            <h2
              style={{
                fontSize: this.state.width < 900 ? this.state.width / 60 : 15,
              }}
              onClick={() => this.props.push("/HomeWorks")}

              //  onClick={() => this.props.history.push("/")}
            >
              How it works
            </h2>
          </div>
          <div>
            <h2
              style={{
                fontSize: this.state.width < 900 ? this.state.width / 60 : 15,
              }}
              // onClick={() => this.props.history.push("/")}
            >
              Blog
            </h2>

            <h2
              style={{
                fontSize: this.state.width < 900 ? this.state.width / 60 : 15,
              }}
              // onClick={() => this.props.history.push("/")}
            >
              Contact Us
            </h2>
          </div>
        </div>
        <div className={style.textPrivacy}>
          <h2
            style={{
              fontSize: this.state.width < 900 ? this.state.width / 60 : 15,
            }}
            // onClick={() => this.props.history.push("/")}
          >
            Privacy Policy
          </h2>

          <h2
            style={{
              fontSize: this.state.width < 900 ? this.state.width / 60 : 15,
            }}
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
