import React from "react";
import Header from "../../compoonent/header";
import style from "./style.module.css";
import TableRow from "../../compoonent/table";
import { Button } from "@material-ui/core";

class HomeWorks extends React.Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    return (
      <div className={style.continer}>
        <Header />
        <div className={style.divContiner}>
          <h1>Property Title</h1>
          <div className={style.divAddress}>
            <h1>Address: </h1>
            <p>Lorem Ipsum</p>
          </div>
          <div className={style.divImage}>
            <img
              src="https://fustany.com/images/ar/content/header_image_how_to_choose_your_home_furniture_if_you_have_children_fustany_main_image.jpg"
              width="50%"
              height="100%"
            />
            <div style={{ width: "90%", height: "100%", marginLeft: 15 }}>
              <div className={style.divForm}>
                <TableRow data={this.state.dataAsk} />
              </div>
              <h1 style={{ margin: 10 }}>Latest Transactions</h1>
              <div className={style.divForm}>
                <TableRow data={this.state.dataAsk} />
              </div>
            </div>
          </div>
          <div className={style.divTokenPrice}>
            <h1>Token Price: $11.75</h1>
            <Button
              style={{
                backgroundColor: "#AE9B77",
                fontSize: "10px",
                color: "#fff",
                textAlign: "center",
                textTransform: "capitalize",
                borderRadius: 8,
                marginInline: 10,
              }}
              variant="contained"
            >
              Buy
            </Button>
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
              }}
              variant="contained"
            >
              Sell
            </Button>
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
                <input style={{ width: 100 }} />
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
                  <input style={{ width: 100 }} />
                  <p style={{ marginLeft: 20, padding: 0, marginBlock: 0 }}>
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
        </div>
      </div>
    );
  }
}

export default HomeWorks;
