import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import Estate from "../../compoonent/estates/estate";
import Realestate from "../../compoonent/estates/realEstates";
import Slider from "react-slick";
import Header from "../../compoonent/header";
import Footer from "../../compoonent/footer";
import backGround from "../../assets/images/imageHome.png";
import Image1 from "../../assets/images/33.png";
import Image2 from "../../assets/images/44.png";
import { getItem } from "../../services/storage";
import { get } from "../../services/axios";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      realEstate: [],
    };
  }
  componentDidMount = async () => {
    // this.setState({ user: await getItem("userData") });
    // console.log(await getItem("userData"));
    get("realEstate/all", [])
      .then((res) => {
        this.setState({ realEstate: res?.data?.data });
        console.log("res", res?.data?.data);
        console.log("tt", this.state.realEstate);
      })
      .catch((error) => console.log("err", error?.response?.data));
  };
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
          <Header push={this.props.history.push} type="home" />
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
            {this.state?.realEstate?.map?.((item, index) => {
              // console.log("item", item);
              return (
                <Estate
                  onClick={() =>
                    this.props.history.push("/HomeWorks", {
                      item,
                    })
                  }
                  data={item}
                />
              );
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
            <Slider
              {...settings}
              arrows={false}
              className={style.testslider}
              autoplay
              infinite
            >
              {people?.map((item, index) => {
                return <Realestate linkImage={Image1} />;
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
            <Slider {...settings} arrows={false} autoplay infinite>
              {people?.map((item, index) => {
                return <Realestate linkImage={Image2} />;
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
