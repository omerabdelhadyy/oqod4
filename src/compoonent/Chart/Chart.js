import React from "react";
import Chart from "react-apexcharts";
import style from "./style.module.css";

class Chartt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,

      options: {
        chart: {
          //   color: "red",
          id: "basic-bar",
          //   width: "900",
          //   height: "auto",
          //   flex: 1,
        },
        // width: 300,
        colors: ["#A89571"],
        xaxis: {
          categories: [
            "July 24",
            "July 25",
            "July 26",
            "July 27",
            "July 28",
            "July 29",
            "July 30",
          ],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 50, 45, 80, 49, 60, 10, 91],
        },
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
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              className={style.tessst}
              options={this.state.options}
              series={this.state.series}
              type="area"
              height={this.state.height / 2}
              width={this.state.width / 1.4}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chartt;
