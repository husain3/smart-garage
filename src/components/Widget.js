import React, { Component } from 'react';
import '../styles/Widget.css';
import Grid from '@material-ui/core/Grid';


class Widget extends Component {
  constructor(props) {
    super(props);
    this.spanStyles = {};
    this.eventSource = new EventSource("http://192.168.1.104:5001/stream");
    if (props.colspan !== 1) {
      this.spanStyles.gridColumn = `span ${props.colspan}`;
    }
    if (props.rowspan !== 1) {
      this.spanStyles.gridRow = `span ${props.rowspan}`;
    }
  }

  componentDidMount() {
    this.eventSource.onmessage = e =>
      // this.updateFlightState(JSON.parse(e.data));
      console.log(e)
  }

  render() {
    return(
      <div style={this.spanStyles} className="Widget">
        <div className="header">
          <h2>
            {this.props.heading}
          </h2>
        </div>
        {/* <div> */}
          {/* <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            padd
          > */}
              {this.props.children}
          {/* </Grid> */}
        {/* </div> */}
      </div>
    );
  }
}

Widget.defaultProps = {
  heading: "Unnamed Widget",
  colspan: 1,
  rowspan: 1
}
export default Widget;
