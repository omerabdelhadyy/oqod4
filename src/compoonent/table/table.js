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
          {this.props?.protfilo ? (
            <>
              <h1
                style={{
                  textAlign: "left",
                  fontSize: this.state.width < 700 ? this.state.width / 50 : 15,
                }}
              >
                tokenId
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 50 : 15,
                  // backgroundColor: "red",
                  textAlign: "center",
                }}
              >
                balance
              </h1>
              <h1 />
            </>
          ) : (
            <>
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
                  // backgroundColor: "red",
                  // textAlign: "right",
                }}
              >
                QTY
              </h1>
            </>
          )}
        </div>
        <div className={style.Line}></div>
        <div className={style.continerScrrol} style={{ heightt }}>
          {data?.map((item, index) => {
            return (
              <div className={style.disc}>
                {this.props?.protfilo ? (
                  <>
                    <h1
                      style={{
                        textAlign: "left",
                        fontSize:
                          this.state.width < 700 ? this.state.width / 50 : 15,
                      }}
                    >
                      {item?.tokenId}
                    </h1>
                    <h1
                      style={{
                        fontSize:
                          this.state.width < 700 ? this.state.width / 50 : 15,
                        // backgroundColor: "red",
                        textAlign: "center",
                      }}
                    >
                      {item?.balance}
                    </h1>
                    <h1 />
                  </>
                ) : (
                  <>
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
                        // backgroundColor: "red",
                        // textAlign: "right",
                      }}
                    >
                      500 tokens
                    </h1>
                  </>
                )}
              </div>
            );
          })}
        </div>
        {/* {this.props?.protfilo && (
          <>
            <div className={style.Line} style={{ marginTop: "1%" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1
                style={{
                  textAlign: "left",
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
                  marginTop: 10,
                  opacity: 0.7,
                }}
              >
                SUMMARY
              </h1>
              <h1
                style={{
                  textAlign: "right",
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
                  marginTop: 10,
                  opacity: 0.7,
                }}
              >
                $198.77
              </h1>
            </div>
          </>
        )} */}
      </div>
    );
  }
}

export default SimpleTable;
