import React from "react";
import style from "./style.module.css";
import { Button } from "@material-ui/core";
import Estate from "../../compoonent/estates/estate";

class Home extends React.Component {
  render() {
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
      <div className={style.continer}>
        <div className={style.viewHeader}>
          <img
            src="https://oqod.co/static/media/logo-primary.59f3b0bc.png"
            alt="oqod"
            width="160"
            height="55"
          />
          <a
            href={""}
            class="button"
            onClick={() => this.props.history.push("/")}
          >
            {`\r`} About
          </a>
          <a
            href={""}
            class="button"
            onClick={() => this.props.history.push("/")}
          >
            {`\r`} Home it works
          </a>
          <a
            href={""}
            class="button"
            onClick={() => this.props.history.push("/")}
          >
            {`\r`} Blogs
          </a>
          <a
            href={""}
            class="button"
            onClick={() => this.props.history.push("/")}
          >
            {`\r`} Countact Us
          </a>
          <Button
            onClick={() => this.onClickLogin()}
            style={{
              backgroundColor: "#AE9B77",
              fontSize: "12px",
              width: "17%",
              color: "#fff",
              textAlign: "center",
              textTransform: "capitalize",
              borderRadius: 10,
            }}
            variant="contained"
          >
            List Property
          </Button>
        </div>
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
        <h1 style={{ textAlign: "center", fontSize: 20, marginTop: 30 }}>
          Latest Investment Opportunities{" "}
        </h1>
        <div className={style.estates}>
          {people?.map((item, index) => {
            return <Estate />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
