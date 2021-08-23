import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import Estate from "../../compoonent/estates/estate";
import Realestate from "../../compoonent/estates/realEstates";
import Slider from "react-slick";
import Header from "../../compoonent/header";
import Footer from "../../compoonent/footer";

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
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
          <div className={style.image}>
            <div className={style.textImage}>
              Invest and Earn <br />
              Much More!
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                <br /> do eiusmod.Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod.
              </p>
              <button
                className={style.ButtonList}
                style={{ backgroundColor: "#fff", color: "#ae9b77" }}
              >
                List Property
              </button>
            </div>
          </div>
          <h1 className={style.textLatest}>Latest Investment Opportunities</h1>
          <div className={style.estates}>
            {people?.map((item, index) => {
              return <Estate />;
            })}
          </div>
          <div className={style.textabout}>
            <h1
              className={style.textLatest}
              style={{ marginTop: 10, paddingBottom: 10 }}
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
            <style>{cssstyle}</style>
            <Slider {...settings}>
              {people?.map((item, index) => {
                return <Realestate />;
              })}
            </Slider>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
const cssstyle = `
// .container {
//   //  margin: 20 ;
//   //  padding: 0px 0px 0px 70px;
//   width: 100%;
//   text-align: center;
//   //  display: block; 
//    background: #5f9ea0;
//    justify-content: space-between; 
//     align-items: center;
//    align-self: center;
//    margin-left: 30px;

// }
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
