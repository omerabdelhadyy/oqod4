import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import Estate from "../../compoonent/estates/estate";
import Realestate from "../../compoonent/estates/realEstates";
import Slider from "react-slick";
import Header from "../../compoonent/header";
import Footer from "../../compoonent/footer";
import backGround from "../../assets/images/imageHome.png";

class Home extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            // infinite: true,
            dots: true,
          },
        },
        // {
        //   breakpoint: 680,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     initialSlide: 1,
        //     dots: true,
        //   },
        // },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            // dots: true,
          },
        },
      ],
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
          <div
            className={style.image}
            style={{
              backgroundImage: `url(${backGround})`,
            }}
          >
            <div className={style.textImage}>
              Invest and Earn <br />
              Much More!
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br /> do eiusmod.Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod.
              </p>
              <button
                onClick={() => this.props.history.push("/Create")}
                className={style.ButtonList}
                style={{ backgroundColor: "#fff", color: "#ae9b77" }}
              >
                List Property
              </button>
            </div>
          </div>
          <h1
            className={style.textLatest}
            style={{ marginTop: 30, marginBottom: 30 }}
          >
            Latest Investment Opportunities
          </h1>
          <div className={style.estates}>
            {people?.map((item, index) => {
              return <Estate />;
            })}
          </div>
          <div className={style.textabout}>
            <h1
              className={style.textLatest}
              // style={{ marginTop: 10, paddingBottom: 10 }}
            >
              About Oqod
            </h1>
            <p>Real estate tokenization & investment platform</p>
          </div>
          <h1 className={style.textreal}>For real estate developer</h1>
          <div className={style.continerSlide}>
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
            {/* <style>{cssstyle}</style> */}
            <Slider {...settings} arrows={false} className={style.testslider}>
              {people?.map((item, index) => {
                return (
                  <Realestate linkImage="https://s3-alpha-sig.figma.com/img/6a34/5c30/c03f76849b5fd18e7eedccb1f433c0ef?Expires=1630886400&Signature=Gwa2JIuNOKbHNcictJ4PtjanzpkZdbY2Jy44yzEhUn6opHXbyNnAHXwvizz794EBKF6uSRLutkZzF66qe8RwzXJl-05vpXlt94NiPSAjK8E0V6ScEQAZkjwa1luZjBLll--8fyVaA1k-~sAcF8j8pIkEz2KkKa2MKtrUYFm667cmMJ2Jpg84mdXN0pcaODg6ygHr6zanaEs7N7frlFQ66pAfrzjFdthAMrUdBNW-HQ-YiLlN2~DViTYtfERKy4kiNGG7kNkOnNNFFtNYVcpIJSSy4cLnQ8p-IZGoRiZzDx64BwmryFO1Fn2b0jR4pXb9wJyyvmW63N~qKVci~s7Cqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                );
              })}
            </Slider>
          </div>
          <h1 style={{ marginTop: 70 }} className={style.textreal}>
            For investors
          </h1>
          <div className={style.continerSlide}>
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
            {/* <style>{cssstyle}</style> */}
            <Slider {...settings} arrows={false}>
              {people?.map((item, index) => {
                return (
                  <Realestate linkImage="https://s3-alpha-sig.figma.com/img/d161/825e/4340c17e2d69b91e90e5f0ff5461d884?Expires=1630886400&Signature=L0mrwdvCOcmJeeM3JOpj~sj~fqiw9kLkDXVgriJsCr3lWoGYvyau0JvSfeqe9qU9KsHo0WhsFZArKAzEfyqJCefABIoCqiWRGHRpFx9joMG0ZxDHNjjOxA8HAlc53SBG6CB5j0x03v0MnMXdfOoduzCoZnrxJY5xBTbc9QU4pRMxkOdjeekX28hetfGavQ6CSzlgd2GKe2pKYgXM~F9fqILyILSf4tZ5O7XUPgxJSXvgr~j-M~KuzvHjTQc0xrewwoPJsveEGPRATZ3fXBxh4958POeU9v7voxqvMrLixrHme5~tyFmhb-PN9SYKUZrPT86XRGrSleE5m-zvWcFCKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                );
              })}
            </Slider>
          </div>
        </div>
        <Footer push={this.props.history.push} />
      </>
    );
  }
}
const cssstyle = `
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
