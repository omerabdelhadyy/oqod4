import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import Estate from "../../compoonent/estates/estate";
import Realestate from "../../compoonent/estates/realEstates";
import Slider from "react-slick";
import Header from "../../compoonent/header";

class Home extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    const people = [
      { firstName: "Elson", lastName: "Correia", info: { age: 24 } },
      { firstName: "John", lastName: "Doe", info: { age: 18 } },
      { firstName: "Jane", lastName: "Doe", info: { age: 34 } },
      { firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
      { firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
      { firstName: "Don", lastName: "Quichote", info: { age: 39 } },
      { firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
      { firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
      { firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
    ];
    return (
      <>
        <div className={style.continer}>
          <Header push={this.props.history.push} />
          <div className={style.image}>
            <div className={style.textImage}>
              Invest and Earn <br />
              Much More!
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br /> do eiusmod.Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod.
              </p>
              <Button
                onClick={() => this.onClickLogin()}
                style={{
                  backgroundColor: "#fff",
                  fontSize: "12px",
                  width: "50%",
                  color: "#AE9B77",
                  textAlign: "center",
                  textTransform: "capitalize",
                  borderRadius: 10,
                }}
                variant="contained"
              >
                List Property
              </Button>
            </div>
          </div>
          <h1
            style={{
              textAlign: "center",
              fontSize: 20,
              marginTop: 30,
              paddingBottom: 30,
            }}
          >
            Latest Investment Opportunities
          </h1>
          <div className={style.estates}>
            {people?.map((item, index) => {
              return <Estate />;
            })}
          </div>
          <div className={style.textabout}>
            <h1 style={{ fontSize: 16 }}>About Oqod</h1>
            <p style={{ fontSize: 13 }}>
              Real estate tokenization & investment platform
            </p>
          </div>
          <h1 className={style.textreal}>For real estate developer</h1>
          <div className="container">
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <style>{cssstyle}</style>
            <Slider {...settings}>
              {people?.map((item, index) => {
                return <Realestate />;
              })}
            </Slider>
          </div>
          <h1 style={{ marginTop: 70 }} className={style.textreal}>
            For investors
          </h1>
          <div className="container">
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <style>{cssstyle}</style>
            <Slider {...settings}>
              {people?.map((item, index) => {
                return <Realestate />;
              })}
            </Slider>
          </div>
        </div>
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
      </>
    );
  }
}
const cssstyle = `
.container {
  //  margin: 20 ;
  //  padding: 0px 0px 0px 70px;
  width: 100%;
  text-align: center;
  //  display: block; 
  //  background: #5f9ea0;
   justify-content: space-between; 
  //  align-items: center;
   align-self: center;
   margin-left: 30px;

}
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 12px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`;

export default Home;
