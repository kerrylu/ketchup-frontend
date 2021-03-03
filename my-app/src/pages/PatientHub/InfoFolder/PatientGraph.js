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
  constructor(props) {
    super(props);
      //dataLine:
  }
  render() {

    return (
      <MDBContainer >

        <h3 className="mt-5">Graph {this.props.patient.name}</h3>

        {this.props.display == "2 Weeks" && <Line data={this.props.graphInfo} options={lineOptions}  redraw/>}

      </MDBContainer>
    );
  }
}

export default PatientGraph;