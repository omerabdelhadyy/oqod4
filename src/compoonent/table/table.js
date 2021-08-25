import React from "react";
import style from "./style.module.css";

class SimpleTable extends React.Component {
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
    const { classes, data, height, heightt } = this.props;
    return (
      <div className={style.continetTable} style={{ height }}>
        <div className={style.title}>
          <h1
            style={{
              textAlign: "left",
              fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
            }}
          >
            ASK
          </h1>
          <h1
            style={{
              fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
            }}
          >
            QTY
          </h1>
          <h1
            style={{
              fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
            }}
          >
            BID
          </h1>
          <h1
            style={{
              fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
            }}
          >
            QTY
          </h1>
        </div>
        <div className={style.Line}></div>
        <div className={style.continerScrrol} style={{ heightt }}>
          {data?.map((item, index) => {
            return (
              <div className={style.disc}>
                <h1
                  style={{
                    textAlign: "left",
                    fontSize:
                      this.state.width < 700 ? this.state.width / 70 : 12,
                  }}
                >
                  $11.50
                </h1>
                <h1
                  style={{
                    fontSize:
                      this.state.width < 700 ? this.state.width / 70 : 12,
                  }}
                >
                  500 tokens
                </h1>
                <h1
                  style={{
                    fontSize:
                      this.state.width < 700 ? this.state.width / 70 : 12,
                  }}
                >
                  $11.50
                </h1>
                <h1
                  style={{
                    fontSize:
                      this.state.width < 700 ? this.state.width / 70 : 12,
                  }}
                >
                  500 tokens
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SimpleTable;
