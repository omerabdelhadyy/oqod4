import React from "react";
import Header from "../../compoonent/header";
import style from "./style.module.css";
import TableRow from "../../compoonent/table/table";
import Transaction from "../../compoonent/Transaction/transaction";
import Footer from "../../compoonent/footer";
import { getItem } from "../../services/storage";
import { get, post } from "../../services/axios";
import { Modal } from "@material-ui/core";
import Loading from "../../compoonent/loading";
import Button from "../../compoonent/button";

class ProtfolloValue extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      Cash_Balance: 0,
      showSendModal: false,
      tokenCount: 1,
      idSend: 0,
      toEmail: "",
      errorMessage: "",
      loadingg: true,

      dataAsk: [
        // { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        // { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        // { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        // { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        // { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        // { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
        // { QTY: "500 tokens", BID: "$11.50", Ask: "$11.75", QTY: "500 tokens" },
      ],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount = async () => {
    get("wallet/balance", {})
      .then((res) => {
        this.setState({ dataAsk: res?.data?.data });
        let chash_balace = 0;
        res?.data?.data.map(
          (item, index) => (chash_balace = chash_balace + item?.balance)
        );
        console.log("res", res?.data?.data);
        this.setState({ Cash_Balance: chash_balace * 50 });
        this.setState({ loadingg: false });
      })
      .catch((error) => {
        this.setState({ loadingg: false });
        console.log("error", error?.response?.data);
      });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  SendToken = async () => {
    this.setState({ errorMessage: "" });
    const { toEmail, idSend, tokenCount } = this.state;
    let body = {
      toEmail,
      tokenId: idSend,
      amount: Number(tokenCount),
    };
    post("wallet/sell", body)
      .then((res) => {
        this.setState({ errorMessage: "successful Send" });
        setTimeout(() => {
          this.setState({ showSendModal: false });
          window.location.reload();
        }, 1000);
        console.log("res", res?.data?.data);
      })
      .catch((error) => {
        this.setState({
          errorMessage:
            error.response.data?.data?.[0] || error.response.data?.message,
        });
        console.log("error", error?.response?.data);
      });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    // console.log(this.state.height);
  }

  popupBuy = () => {
    return (
      <Modal
        open={this.state.showSendModal}
        onClose={() => this.setState({ showSendModal: false })}
        className={style.customStyles}
        style={{ backgroundColor: "#fff" }}
        // contentLabel="Example Modal"
      >
        <div className={style.divPopupBuy}>
          <p
            onClick={() => this.setState({ showSendModal: false })}
            className={style.exitModal}
          >
            ×
          </p>
          <h1>token price $50</h1>
          <h1>What is the tokenid you want to send ?</h1>
          <input
            style={{ marginBlock: 10 }}
            onChange={(text) => this.setState({ idSend: text.target.value })}
          />
          <h1>How many codes do you want to sell ?</h1>
          <input
            style={{ marginBlock: 10 }}
            onChange={(text) =>
              this.setState({ tokenCount: text.target.value })
            }
          />
          <h1 style={{ fontSize: 16 }}>
            Please enter the email of the person you want to Send to.
          </h1>
          <input
            type="email"
            style={{ width: "60%", fontSize: 13 }}
            onChange={(text) => this.setState({ toEmail: text.target.value })}
          />

          <p>
            price $
            {this.state.tokenCount == "" ? 50 : this.state.tokenCount * 50}
          </p>
          <p
            style={{
              color: this.state.errorMessage?.includes?.("successful")
                ? "green"
                : "red",
            }}
          >
            {this.state.errorMessage}
          </p>
          <Button
            onClick={() => this.SendToken()}
            textButton="Send"
            // backgroundColor="#fff"
            // color="#ae9b77"
            height={this.state.width > 900 ? this.state.width / 40 : 33}
            width={this.state.width > 900 ? this.state.width / 15 : 80}
            fontSize={this.state.width > 900 ? this.state.width / 100 : 12}
          />
          {/* <button className={style.ButtonList} onClick={() => this.SendToken()}>
            Send
          </button> */}
        </div>
      </Modal>
    );
  };
  render() {
    return (
      <>
        <div className={style.continer}>
          {this.popupBuy()}
          <Header push={this.props.history.push} type="profile" />
          <div className={style.form}>
            <div className={style.divButton}>
              <h1
                style={{
                  fontSize: this.state.width < 900 ? this.state.width / 60 : 17,
                }}
              >
                Protfolio Value
              </h1>
              <div style={{ margin: 0, padding: 0, display: "flex" }}>
                <Button
                  onClick={() => this.setState({ showSendModal: true })}
                  textButton="Send"
                  // backgroundColor="#fff"
                  // color="#ae9b77"
                  height={this.state.width > 900 ? this.state.width / 35 : 23}
                  width={this.state.width > 900 ? this.state.width / 15 : 40}
                  fontSize={this.state.width > 900 ? this.state.width / 100 : 7}
                />
                <Button
                  textButton="Receive"
                  onClick={() => this.signOut()}
                  backgroundColor="#fff"
                  color="#ae9b77"
                  height={this.state.width > 900 ? this.state.width / 35 : 23}
                  width={this.state.width > 900 ? this.state.width / 15 : 40}
                  fontSize={this.state.width > 900 ? this.state.width / 100 : 7}
                />
              </div>
            </div>

            {this.state.loadingg ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Loading />
              </div>
            ) : (
              <>
                <div className={style.cashbalance}>
                  <h1
                    style={{
                      marginBottom: 4,
                      fontSize:
                        this.state.width < 900 ? this.state.width / 60 : 13,
                    }}
                  >
                    Cash Balance
                  </h1>
                  <h1
                    style={{
                      fontSize:
                        this.state.width < 900 ? this.state.width / 50 : 15,
                    }}
                  >
                    $
                    <span
                      style={{
                        fontSize:
                          this.state.width < 900 ? this.state.width / 30 : 30,
                      }}
                    >
                      {this.state.Cash_Balance}
                    </span>
                  </h1>
                </div>
                <TableRow data={this.state.dataAsk} protfilo />
              </>
            )}
          </div>
          <div
            className={style.form}
            style={{ marginBottom: 20, paddingBottom: 10 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingInline: 20,
              }}
            >
              <h1
                style={{
                  fontSize: this.state.width < 900 ? this.state.width / 60 : 18,
                }}
              >
                Latest Transactions
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 900 ? this.state.width / 60 : 12,
                  opacity: 0.7,
                }}
              >
                See all
              </h1>
            </div>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </div>
        <Footer push={this.props.history.push} />
      </>
    );
  }
}
export default ProtfolloValue;
