import React from "react";
import Chart from "react-apexcharts";

class Chartt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              //   width="500"
              width="900"
              height="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chartt;
