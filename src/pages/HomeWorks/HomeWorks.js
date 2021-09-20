import React from "react";
import Header from "../../compoonent/header";
import style from "./style.module.css";
import TableRow from "../../compoonent/table/table";
import { Button } from "@material-ui/core";
import Chart from "../../compoonent/Chart/Chart";
import Footer from "../../compoonent/footer";
import Image3 from "../../assets/images/44.png";
import { Modal } from "@material-ui/core";
import { get, post } from "../../services/axios";
import { getItem } from "../../services/storage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
  },
};
class HomeWorks extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      tokenCount: 1,
      visibleBuy: false,
      visibleSell: false,
      userData: [],
      toEmail: "",
      Message: "",
      dataAsk: [
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
      ],
      dataAsk2: [
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
      ],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount = async () => {
    this.setState({ userData: await getItem?.("userData") });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    // console.log(this.state.height);
  }

  BuyToken = () => {
    // console.log(typeof this.state?.tokenCount);
    let body = {
      fromEmail: this.props?.location?.state.item?.User?.email,
      tokenId: this.props?.location?.state.item?.id,
      amount: Number(this.state?.tokenCount),
    };
    post("wallet/buy", body)
      .then((res) => {
        this.setState({ Message: res?.data?.message });
        setTimeout(() => {
          this.setState({ visibleBuy: false });
        }, 2000);
        console.log("res", res?.data);
      })
      .catch((error) => {
        this.setState({ Message: error.response?.data?.message });
        console.log("error", error.response.data);
      });
  };
  SellToken = () => {
    let body = {
      toEmail: this.state.toEmail,
      tokenId: this.props?.location?.state.item?.id,
      amount: Number(this.state?.tokenCount),
    };
    post("wallet/sell", body)
      .then((res) => {
        this.setState({ Message: res?.data?.message });
        setTimeout(() => {
          this.setState({ visibleSell: false });
        }, 2000);
        console.log("res", res?.data);
      })
      .catch((error) => {
        this.setState({ Message: error.response?.data?.message });
        console.log("error", error.response.data);
      });
  };
  popupBuy = () => {
    return (
      <Modal
        open={this.state.visibleBuy}
        onClose={() => this.setState({ visibleBuy: false })}
        className={style.customStyles}
        style={{ backgroundColor: "#fff" }}
        // contentLabel="Example Modal"
      >
        <div className={style.divPopupBuy}>
          <p
            onClick={() => this.setState({ visibleBuy: false })}
            style={{
              position: "absolute",
              right: 10,
              // padding: 10,
              top: 0,
              color: "red",
              fontSize: 30,
              cursor: "pointer",
              padding: 0,
              margin: 0,
              // backgroundColor: "red",
            }}
          >
            ×
          </p>
          <h1>token price $50</h1>
          <h1>How many tokens do you want to buy ?</h1>
          <input
            onChange={(text) =>
              this.setState({ tokenCount: text.target.value })
            }
          />
          <p>
            price $
            {this.state.tokenCount == "" ? 50 : this.state.tokenCount * 50}
          </p>
          <p
            style={{
              color: this.state.Message.includes("successful")
                ? "green"
                : "red",
            }}
          >
            {this.state.Message}
          </p>
          <button className={style.ButtonList} onClick={() => this.BuyToken()}>
            Buy
          </button>
        </div>
      </Modal>
    );
  };
  popupSell = () => {
    return (
      <Modal
        open={this.state.visibleSell}
        onClose={() => this.setState({ visibleSell: false })}
        className={style.customStyles}
        style={{ backgroundColor: "#fff" }}
        // contentLabel="Example Modal"
      >
        <div className={style.divPopupBuy}>
          <p
            onClick={() => this.setState({ visibleSell: false })}
            style={{
              position: "absolute",
              right: 10,
              // padding: 10,
              top: 0,
              color: "red",
              fontSize: 30,
              cursor: "pointer",
              padding: 0,
              margin: 0,
              // backgroundColor: "red",
            }}
          >
            ×
          </p>
          <h1>token price $50</h1>
          <h1 style={{ fontSize: 16 }}>
            Please enter the email of the person you want to sell to.
          </h1>
          <input
            type="email"
            style={{ width: "60%", fontSize: 13 }}
            onChange={(text) => this.setState({ toEmail: text.target.value })}
          />
          <br />
          <h1>How many codes do you want to sell ?</h1>
          <input
            style={{ marginBlock: 10 }}
            onChange={(text) =>
              this.setState({ tokenCount: text.target.value })
            }
          />
          <br />
          <p>
            price $
            {this.state.tokenCount == "" ? 50 : this.state.tokenCount * 50}
          </p>
          <p
            style={{
              color: this.state.Message.includes("successful")
                ? "green"
                : "red",
            }}
          >
            {this.state.Message}
          </p>
          <button className={style.ButtonList} onClick={() => this.SellToken()}>
            Sell
          </button>
        </div>
      </Modal>
    );
  };

  render() {
    const { item } = this.props?.location?.state;
    return (
      <>
        <div
          className={style.continer}
          // onClick={() => this.setState({ visibleBuy: true })}
        >
          {this.popupBuy()}
          {this.popupSell()}
          <Header push={this.props.history.push} type="home" />
          <div className={style.divContiner}>
            <h1 style={{ fontSize: this.state.width / 60 }}>{item?.title}</h1>
            <div className={style.divAddress}>
              <h1
                style={{
                  fontSize: this.state.width / 70,
                  margin: 0,
                  padding: 0,
                }}
              >
                Address:
              </h1>
              <p
                style={{
                  fontSize: this.state.width / 80,
                  padding: 0,
                  margin: 0,
                  marginLeft: 10,
                }}
              >
                {item?.address}
              </p>
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
                src={Image3}
                // src="https://fustany.com/images/ar/content/header_image_how_to_choose_your_home_furniture_if_you_have_children_fustany_main_image.jpg"
              />
              <div
                style={{
                  width: "50%",
                }}
              >
                <div
                  // className={style.divForm}
                  style={{ height: this.state.width / 9 }}
                >
                  <TableRow
                    data={this.state.dataAsk}
                    height={this.state.width / 8.5}
                  />
                </div>
                <h1
                  style={{
                    margin: 10,
                    fontSize: this.state.width / 85,
                    paddingTop: "7%",
                  }}
                >
                  Latest Transactions
                </h1>

                <TableRow
                  data={this.state.dataAsk2}
                  height={this.state.width / 16}
                  // height={40}
                />
              </div>
            </div>
            <div className={style.divTokenPrice}>
              <h1>Token Price: $50</h1>
              <button
                style={{
                  width: this.state.width / 12,
                  maxWidth: 80,
                  height: this.state.width / 22,
                  maxHeight: 30,
                }}
                className={style.ButtonList}
                onClick={() => this.setState({ visibleBuy: true })}
              >
                Buy
              </button>
              {item?.userId == this?.state?.userData?.user?.id && (
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#AE9B77",
                    borderWidth: 1,
                    borderColor: "#AE9B77",
                    borderStyle: "solid",
                    width: this.state.width / 12,
                    maxWidth: 80,
                    height: this.state.width / 22,
                    maxHeight: 30,
                  }}
                  className={style.ButtonList}
                  onClick={() => this.setState({ visibleSell: true })}
                >
                  Sell
                </button>
              )}
            </div>
            <div className={style.divSell}>
              <div className={style.HeadDivSell}>
                <div className={style.bodyDivSell}>
                  <select
                    name="Buy"
                    id="Buy"
                    style={{
                      fontSize:
                        this.state.width < 900 ? this.state.width / 60 : 13,
                    }}
                  >
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                  </select>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    width: "50%",
                    // backgroundColor: "red",
                  }}
                >
                  <h1
                    style={{
                      // height: "70%",
                      fontSize:
                        this.state.width < 700 ? this.state.width / 60 : 16,
                      paddingBottom: 20,
                    }}
                  >
                    QTY
                  </h1>
                  <input
                    style={{
                      width: this.state.width / 12,
                      height:
                        this.state.width < 700 ? this.state.width / 52 : 15,
                    }}
                  />
                </div>
                {/* <h1></h1> */}

                <div
                  style={{
                    textAlign: "center",
                    width: "70%",
                    // backgroundColor: "red",
                  }}
                >
                  <h1
                    style={{
                      paddingBottom: 20,
                      // height: "70%",
                      fontSize:
                        this.state.width < 700 ? this.state.width / 60 : 16,
                    }}
                  >
                    Price
                  </h1>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      // backgroundColor: "red",
                      paddingLeft: 30,
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
                    <input
                      style={{
                        width: this.state.width / 12,
                        height:
                          this.state.width < 700 ? this.state.width / 52 : 15,
                      }}
                    />
                    <p
                      style={{
                        marginLeft: 20,
                        padding: 0,
                        marginBlock: 0,
                        // backgroundColor: "red",
                        width: 200,
                        textAlign: "left",
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 12,
                      }}
                    >
                      Market Price
                    </p>
                  </div>
                </div>
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
                  // backgroundColor: "red",
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
        <Footer push={this.props.history.push} />
      </>
    );
  }
}

export default HomeWorks;
