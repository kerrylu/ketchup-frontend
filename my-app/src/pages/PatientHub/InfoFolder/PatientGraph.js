import { Line } from "react-chartjs-2";
import React from "react";
import { MDBContainer } from "mdbreact";

const lineOptions = {
  onClick: (e, element) => {
    if (element.length > 0) {
      var ind = element[0]._index;
      alert(ind);
    }
  },  responsive: true, legend:{display : false}
 }

class PatientGraph extends React.Component {
  state = {
    dataLine: {
      labels: ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  };
  

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Graph</h3>
        <Line data={this.state.dataLine} options={lineOptions} />
      </MDBContainer>
    );
  }
}

export default PatientGraph;