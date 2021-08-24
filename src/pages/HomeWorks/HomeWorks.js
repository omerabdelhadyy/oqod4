import React from "react";
import Header from "../../compoonent/header";
import style from "./style.module.css";
import TableRow from "../../compoonent/table";
import { Button } from "@material-ui/core";
import Chart from "../../compoonent/Chart/Chart";
import Footer from "../../compoonent/footer";

class HomeWorks extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      dataAsk: [
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
      ],
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
      <>
        <div className={style.continer}>
          <Header push={this.props.history.push} />
          <div className={style.divContiner}>
            <h1 style={{ fontSize: this.state.width / 60 }}>Property Title</h1>
            <div className={style.divAddress}>
              <h1 style={{ fontSize: this.state.width / 70 }}>Address: </h1>
              <p style={{ fontSize: this.state.width / 80 }}>Lorem Ipsum</p>
            </div>
            <div
              className={style.divImage}
              style={{
                height: this.state.width / 4,
                // overflow: "scroll",
              }}
            >
              <img
                className={style.imageProperty}
                src="https://fustany.com/images/ar/content/header_image_how_to_choose_your_home_furniture_if_you_have_children_fustany_main_image.jpg"
              />
              <div
                style={{
                  width: "50%",
                }}
              >
                <div
                  className={style.divForm}
                  style={{ height: this.state.width / 9 }}
                >
                  <TableRow data={this.state.dataAsk} />
                </div>
                <h1 style={{ margin: 10, fontSize: this.state.width / 80 }}>
                  Latest Transactions
                </h1>
                <div
                  className={style.divForm}
                  style={{ height: this.state.width / 9 }}
                >
                  <TableRow data={this.state.dataAsk} />
                </div>
              </div>
            </div>
            <div className={style.divTokenPrice}>
              <h1>Token Price: $11.75</h1>
              <button
                style={{
                  width: this.state.width / 12,
                  maxWidth: 70,
                  height: this.state.width / 22,
                  maxHeight: 35,
                }}
                className={style.ButtonList}
                // onClick={() => this.props.push("/Create")}
              >
                Buy
              </button>
              <button
                style={{
                  backgroundColor: "#fff",
                  color: "#AE9B77",
                  borderWidth: 1,
                  borderColor: "#AE9B77",
                  borderStyle: "solid",
                  width: this.state.width / 12,
                  maxWidth: 70,
                  height: this.state.width / 22,
                  maxHeight: 35,
                }}
                className={style.ButtonList}
                // onClick={() => this.props.push("/Create")}
              >
                Sell
              </button>
            </div>
            <div className={style.divSell}>
              <div className={style.HeadDivSell}>
                <div
                  style={{
                    textAlign: "center",
                    width: "50%",
                  }}
                >
                  <h1 style={{ height: "100%" }}>QTY</h1>
                  <input style={{ width: this.state.width / 12 }} />
                </div>
                <h1></h1>
                <div
                  style={{
                    textAlign: "center",
                    width: "70%",
                  }}
                >
                  <h1 style={{ height: "100%" }}>Price</h1>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <div className={style.divSelectYes}>
                      <div
                        style={{
                          backgroundColor: "#B09E7A",
                          height: "100%",
                          width: "100%",
                          borderRadius: 50,
                        }}
                      ></div>
                    </div>
                    <input style={{ width: this.state.width / 12 }} />
                    <p
                      style={{
                        marginLeft: 20,
                        padding: 0,
                        marginBlock: 0,
                        // backgroundColor: "red",
                        width: 100,
                        textAlign: "left",
                      }}
                    >
                      Market Price
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.bodyDivSell}>
                <select name="Buy" id="Buy">
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                </select>
              </div>
            </div>
            <div className={style.Chart}>
              <Chart />
            </div>
            <div className={style.divRelated}>
              <h1 style={{ paddingBlock: 20 }}>Related updates</h1>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div className={style.divSelectYes}>
                  <div
                    style={{
                      backgroundColor: "#B09E7A",
                      height: "100%",
                      width: "100%",
                      borderRadius: 50,
                    }}
                  ></div>
                </div>
                <h1 className={style.textLink}>Link to news about property</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div className={style.divSelectYes}>
                  <div
                    style={{
                      backgroundColor: "#B09E7A",
                      height: "100%",
                      width: "100%",
                      borderRadius: 50,
                    }}
                  ></div>
                </div>
                <h1 className={style.textLink}>Link to news about property</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div className={style.divSelectYes}>
                  <div
                    style={{
                      backgroundColor: "#B09E7A",
                      height: "100%",
                      width: "100%",
                      borderRadius: 50,
                    }}
                  ></div>
                </div>
                <h1 className={style.textLink}>Link to news about property</h1>
              </div>
              <Button
                style={{
                  backgroundColor: "#fff",
                  fontSize: "10px",
                  color: "#AE9B77",
                  textAlign: "center",
                  textTransform: "capitalize",
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#AE9B77",
                  borderStyle: "solid",
                  marginBlock: 20,
                }}
                variant="contained"
              >
                More
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default HomeWorks;
