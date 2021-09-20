import React from "react";
import Header from "../../compoonent/header";
import style from "./style.module.css";
import TableRow from "../../compoonent/table/table";
import Transaction from "../../compoonent/Transaction/transaction";
import Footer from "../../compoonent/footer";

class ProtfolloValue extends React.Component {
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
                <button
                  style={{
                    width: this.state.width < 900 ? this.state.width / 10 : 90,
                    height: this.state.width < 900 ? this.state.width / 20 : 35,
                    fontSize:
                      this.state.width < 900 ? this.state.width / 60 : 15,
                  }}
                >
                  Send
                </button>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#ae9b77",
                    width: this.state.width < 900 ? this.state.width / 10 : 90,
                    height: this.state.width < 900 ? this.state.width / 20 : 35,
                    fontSize:
                      this.state.width < 900 ? this.state.width / 60 : 15,
                  }}
                >
                  Receive
                </button>
              </div>
            </div>
            <div className={style.cashbalance}>
              <h1
                style={{
                  marginBottom: 4,
                  fontSize: this.state.width < 900 ? this.state.width / 60 : 13,
                }}
              >
                Cash Balance
              </h1>
              <h1
                style={{
                  fontSize: this.state.width < 900 ? this.state.width / 50 : 15,
                }}
              >
                $
                <span
                  style={{
                    fontSize:
                      this.state.width < 900 ? this.state.width / 30 : 30,
                  }}
                >
                  1.877
                </span>
              </h1>
            </div>
            <TableRow data={this.state.dataAsk} protfilo />
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
