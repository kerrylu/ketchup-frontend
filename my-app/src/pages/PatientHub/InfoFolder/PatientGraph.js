import { Line } from "react-chartjs-2";
import React from "react";
import { MDBContainer } from "mdbreact";

// make Fake Data

let graceTexts = []
for(let i = 0; i<60; i++) {
  var d = new Date();
      d.setDate(d.getDate() - i);
  const Text = {
    body: "Grace Text",
    time: formatDate(d),
    emotion : "happy",
    sentiment : Math.random()
  }
  graceTexts.push(Text)
}
let brycenTexts = []
for(let i = 0; i<60; i++) {
  var d = new Date();
      d.setDate(d.getDate() - i);
  const Text = {
    body: "Brycen Text",
    time: formatDate(d),
    emotion : "happy",
    sentiment : Math.random()
  }
  brycenTexts.push(Text)
}
let dannyTexts = []
for(let i = 0; i<60; i++) {
  var d = new Date();
      d.setDate(d.getDate() - i);
  const Text = {
    body: "Danny Text",
    time: formatDate(d),
    emotion : "happy",
    sentiment : Math.random()
  }
  dannyTexts.push(Text)
}



const lineOptions = {
  onClick: (e, element) => {
    if (element.length > 0) {
      var ind = element[0]._index;
      alert(ind);
    }
  },  responsive: true, legend:{display : false}
 }

 function formatDate(date){
  var dd = date.getDate();
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
  date = mm+'/'+dd+'/'+yyyy;
  return date
}



function LastXDays (x) {
  var result = [];
  for (var i=0; i<x; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push( formatDate(d) )
  }

  return(result);
}

class PatientGraph extends React.Component {
  constructor(props) {
    super(props);
    this.getTexts = this.getTexts.bind(this);
    var texts = this.getTexts(this.props.patient.id)

    
  }
  
  getTexts() {

  }
  
  state = {
    dataLine: {
      labels: ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(146, 170, 255)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(146, 170, 255)",
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
        <h3 className="mt-5">Graph {this.props.patient.name}</h3>

        {this.props.display == "2 Weeks" && <Line data={this.state.dataLine} options={lineOptions} />}
        {this.props.display == "2 Months" && <Line data={this.state.dataLine} options={lineOptions} />}

      </MDBContainer>
    );
  }
}

export default PatientGraph;