import React from "react";
import style from "./style.module.css";
import ButtonCom from "../../compoonent/button";
import { Modal } from "@material-ui/core";
import { post } from "../../services/axios";
import { getItem } from "../../services/storage";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      width: 0,
      height: 0,
      popupSendOffer: false,
      popupAcceptOffer: false,
      MessageAccept: "",
      Message: "",
      tokenprice: this.props?.price,
      tokenCount: this?.state?.itemSelect?.quantity,
      itemSelect: [],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount = async () => {
    this.setState({ user: await getItem("userData") });
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
  rejectOffre = () => {
    // console.log(this.state.itemSelect.id);
    post(`offer/reject/${this.state.itemSelect.id}`)
      .then((res) => {
        console.log("res", res?.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
      });
  };
  acceptOffer = () => {
    // console.log(this.state.itemSelect.id);
    post(`offer/accept/${this.state.itemSelect.id}`)
      .then((res) => {
        this.setState({ MessageAccept: res?.data?.message });
        console.log("res", res?.data);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        this.setState({
          MessageAccept:
            error.response.data?.data?.[0] || error.response.data?.message,
        });
        console.log("error", error?.response?.data);
      });
  };
  sendOffer = () => {
    const { itemSelect, tokenCount, tokenprice } = this.state;
    let body = {
      realEstateId: itemSelect?.realEstateId,
      ownerEmail: itemSelect?.User?.email,
      quantity: Number(tokenCount) || Number(itemSelect?.quantity),
      price: Number(tokenprice),
    };
    // console.log("body", body);
    post("offer", body)
      .then((res) => {
        this.setState({ Message: res?.data?.message });
        console.log("res", res?.data);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        this.setState({
          Message:
            error.response.data?.data?.[0] || error.response.data?.message,
        });
        console.log("error", error?.response?.data);
      });
  };
  popupSendOffer = () => {
    return (
      <Modal
        open={this.state.popupSendOffer}
        onClose={() =>
          this.setState({
            popupSendOffer: false,
            tokenCount: null,
            tokenprice: 50,
          })
        }
        className={style.customStyles}
        // style={{ backgroundColor: "#fff" }}
        // contentLabel="Example Modal"
      >
        <div className={style.divPopupBuy}>
          <p
            className={style.closePopUp}
            onClick={() => this.setState({ popupSendOffer: false })}
          >
            ×
          </p>
          <h1>token price $50</h1>
          <h1>How many tokens do you want to buy?</h1>
          <input
            // placeholder={`max value ${this.state.itemSelect?.quantity}`}
            max={this.state.itemSelect?.quantity}
            type="number"
            defaultValue={this.state.itemSelect?.quantity}
            onChange={(text) =>
              this.setState({ tokenCount: text.target.value })
            }
          />
          <h1>What price do you want to buy ?</h1>
          <input
            // placeholder={`max value ${this.state.itemSelect?.quantity}`}
            min={this.props.price}
            type="number"
            defaultValue={this.props.price}
            onChange={(text) =>
              this.setState({ tokenprice: text.target.value })
            }
          />
          <p>
            price $
            {this.state.tokenCount
              ? this.state.tokenCount * this.state.tokenprice
              : this.state.itemSelect?.quantity * this.state.tokenprice}
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
          <div style={{ marginTop: 10 }}>
            <ButtonCom
              textButton="Send offer"
              onClick={() => this.sendOffer()}
              height={this.state.width > 900 ? this.state.width / 45 : 30}
              width={this.state.width > 900 ? this.state.width / 15 : 70}
              fontSize={this.state.width > 900 ? this.state.width / 105 : 10}
            />
          </div>
        </div>
      </Modal>
    );
  };
  popupAcceptOffer = () => {
    // console.log(this.state.itemSelect);
    return (
      <Modal
        open={this.state.popupAcceptOffer}
        onClose={() =>
          this.setState({
            popupAcceptOffer: false,
          })
        }
        className={style.customStyles}
        style={{ backgroundColor: "#fff" }}
        // contentLabel="Example Modal"
      >
        <div className={style.divPopupBuy}>
          <p
            className={style.closePopUp}
            onClick={() => this.setState({ popupAcceptOffer: false })}
          >
            ×
          </p>
          <h1 style={{ marginTop: 20 }}>Are you sure about the sale?</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: 14, color: "#6D6A6E" }}>
              quantity :
              <span style={{ color: "#000" }}>
                {this.state.itemSelect?.quantity}
              </span>
            </h1>
            <h1 style={{ fontSize: 14, color: "#6D6A6E" }}>
              price :
              <span style={{ color: "#000" }}>
                {this.state.itemSelect?.price}
              </span>
            </h1>
          </div>
          <h1 style={{ fontSize: 14, color: "#6D6A6E" }}>
            Total :
            <span style={{ color: "#000" }}>
              {this.state.itemSelect?.quantity * this.state.itemSelect?.price}
            </span>
          </h1>
          <p
            style={{
              color: this.state.MessageAccept.includes("approved")
                ? "green"
                : "red",
            }}
          >
            {this.state.MessageAccept}
          </p>
          <div style={{ marginTop: 15 }}>
            <ButtonCom
              textButton="Sale"
              onClick={() => this.acceptOffer()}
              height={this.state.width > 900 ? this.state.width / 45 : 30}
              width={this.state.width > 900 ? this.state.width / 15 : 70}
              fontSize={this.state.width > 900 ? this.state.width / 105 : 10}
            />
          </div>
        </div>
      </Modal>
    );
  };
  render() {
    const { classes, data, height, heightt, price, maxHeight, width } =
      this.props;
    return (
      <div className={style.continetTable} style={{ height, maxHeight, width }}>
        {this.popupSendOffer()}
        {this.popupAcceptOffer()}

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
          ) : this.props.transaction ? (
            <>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 15,
                  width: "20%",
                  // backgroundColor: "red",
                  textAlign: "left",
                }}
              >
                BID
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 15,
                  // backgroundColor: "red",
                  width: "20%",
                }}
              >
                QTY
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 15,
                  // width: "15%",
                  // backgroundColor: "red",
                  width: "20%",
                }}
              >
                OWNER USER
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 15,
                  width: "20%",
                  // backgroundColor: "red",
                  marginLeft: 20,
                }}
              >
                BUYER USER
              </h1>

              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 15,
                  width: "20%",
                  // backgroundColor: "red",
                }}
              >
                DATE
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 15,
                  width: "20%",
                  // backgroundColor: "red",
                  marginRight: 20,
                }}
              >
                TIME
              </h1>
            </>
          ) : this.props?.incoming ? (
            <>
              <h1
                style={{
                  textAlign: "left",
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
                  // backgroundColor: "red",
                  width: "18%",
                }}
              >
                owner
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
                  width: "15%",
                  // backgroundColor: "red",
                  // width: "20%",
                }}
              >
                QTY
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
                  width: "15%",
                  // backgroundColor: "red",
                }}
              >
                price
              </h1>
              <h1 />
            </>
          ) : (
            <>
              <h1
                style={{
                  textAlign: "left",
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
                  // backgroundColor: "red",
                  width: "28%",
                }}
              >
                owner
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
                  width: "20%",
                }}
              >
                QTY
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 700 ? this.state.width / 70 : 12,
                  width: "25%",
                  // backgroundColor: "red",
                  textAlign: "right",
                }}
              >
                token price
              </h1>

              <h1 />
            </>
          )}
        </div>
        <div className={style.Line}></div>
        <div className={style.continerScrrol} style={{ heightt }}>
          {data?.map?.((item, index) => {
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
                ) : this.props.transaction ? (
                  <>
                    <h1
                      style={{
                        // color: "#438F33",
                        fontSize:
                          this.state.width > 900 ? this.state.width / 80 : 7,
                        width: "20%",
                        // paddingLeft: "5%",
                        textAlign: "left",
                      }}
                    >
                      ${item?.price}
                    </h1>
                    <h1
                      style={{
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 14,
                        // backgroundColor: "red",
                        width: "20%",
                      }}
                    >
                      {item?.quantity} tokens
                    </h1>
                    <h1
                      style={{
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 14,
                        // backgroundColor: "red",
                        width: "18.5%",
                        paddingLeft: 15,
                      }}
                    >
                      {item?.ownerUser?.name}
                    </h1>
                    <ArrowRightAltIcon
                      color="#438F33"
                      style={{ color: "#438F33" }}
                    />
                    <h1
                      style={{
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 14,
                        width: "20%",
                        // backgroundColor: "red",
                        // textAlign: "right",
                      }}
                    >
                      {item?.buyerUser?.name}
                      {/* {item?.price} */}
                      {/* {item?.price} */}
                    </h1>

                    <h1
                      style={{
                        // color: "#438F33",
                        fontSize:
                          this.state.width > 900 ? this.state.width / 100 : 10,
                        // backgroundColor: "red",
                        // paddingLeft: "5%",
                        width: "20%",
                      }}
                    >
                      {new Date(`${item?.createdAt}`)
                        .toString()
                        .substring(0, 15)}
                    </h1>
                    <h1
                      style={{
                        // color: "#438F33",
                        fontSize:
                          this.state.width > 900 ? this.state.width / 100 : 10,
                        // backgroundColor: "red",
                        // paddingLeft: "5%",
                        width: "20%",
                      }}
                    >
                      {new Date(`${item?.createdAt}`)
                        .toString()
                        .substring(16, 21)}
                    </h1>
                  </>
                ) : this.props?.incoming ? (
                  <>
                    <h1
                      style={{
                        textAlign: "left",
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 12,
                        // backgroundColor: "red",
                        width: "18%",
                      }}
                    >
                      {item?.buyerUser?.name || item?.ownerUser?.name}
                    </h1>
                    <h1
                      style={{
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 12,
                        // backgroundColor: "red",
                        width: "20%",
                      }}
                    >
                      {item?.quantity} tokens
                    </h1>
                    <h1
                      style={{
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 12,
                        width: "8%",
                        // backgroundColor: "red",
                        // textAlign: "right",
                      }}
                    >
                      ${item?.price}
                      {/* {item?.price} */}
                    </h1>
                    {item?.status == "rejected" ? (
                      <h1
                        style={{
                          color: "#D33838",
                          fontSize:
                            this.state.width > 900 ? this.state.width / 80 : 7,

                          paddingLeft: "5%",
                        }}
                      >
                        {item?.status}
                      </h1>
                    ) : item?.status == "approved" ? (
                      <h1
                        style={{
                          color: "#438F33",
                          fontSize:
                            this.state.width > 900 ? this.state.width / 80 : 7,

                          paddingLeft: "2%",
                        }}
                      >
                        {item?.status}
                      </h1>
                    ) : item?.status == "pending" && this.props.outgoing ? (
                      <h1
                        style={{
                          color: "#000",
                          fontSize:
                            this.state.width > 900 ? this.state.width / 80 : 7,

                          paddingLeft: "4%",
                        }}
                      >
                        {item?.status}
                      </h1>
                    ) : (
                      <div
                        style={{
                          marginLeft: 25,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <ButtonCom
                          incoming
                          textButton="Accept"
                          onClick={() => {
                            this.setState({
                              popupAcceptOffer: true,
                              itemSelect: item,
                            });
                          }}
                          backgroundColor="#438F33"
                          // color="#ae9b77"
                          height={
                            this.state.width > 900 ? this.state.width / 50 : 23
                          }
                          width={
                            this.state.width > 900 ? this.state.width / 20 : 40
                          }
                          fontSize={
                            this.state.width > 900 ? this.state.width / 135 : 7
                          }
                        />
                        <div style={{ marginLeft: 10 }}>
                          <ButtonCom
                            incoming
                            textButton="reject"
                            onClick={async () => {
                              await this.setState({ itemSelect: item });

                              this.rejectOffre();
                            }}
                            backgroundColor="#D33838"
                            // color="#ae9b77"
                            height={
                              this.state.width > 900
                                ? this.state.width / 50
                                : 23
                            }
                            width={
                              this.state.width > 900
                                ? this.state.width / 20
                                : 40
                            }
                            fontSize={
                              this.state.width > 900
                                ? this.state.width / 135
                                : 7
                            }
                          />
                        </div>
                      </div>
                    )}
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
                      {item?.User?.name}
                    </h1>
                    <h1
                      style={{
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 12,
                      }}
                    >
                      {item?.quantity} tokens
                    </h1>
                    <h1
                      style={{
                        fontSize:
                          this.state.width < 700 ? this.state.width / 70 : 12,
                        // backgroundColor: "red",
                      }}
                    >
                      {price}
                      {/* {item?.price} */}
                    </h1>

                    <ButtonCom
                      opacity={
                        item?.userId == this.state?.user?.user?.id ? 0.5 : 1
                      }
                      disabled={item?.userId == this.state?.user?.user?.id}
                      textButton="Send Offer"
                      onClick={() => {
                        this.setState({
                          popupSendOffer: true,
                          itemSelect: item,
                        });
                      }}
                      // backgroundColor="#fff"
                      // color="#ae9b77"
                      height={
                        this.state.width > 900 ? this.state.width / 50 : 23
                      }
                      width={
                        this.state.width > 900 ? this.state.width / 15 : 40
                      }
                      fontSize={
                        this.state.width > 900 ? this.state.width / 135 : 7
                      }
                    />
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
