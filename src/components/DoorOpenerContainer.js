import React, { Component } from 'react';
import axios from 'axios';

import DoorStatusWidget from "./DoorOpenerWidget";

class DoorStatusContainer extends Component {
  constructor(props) {
    super();
    
    this.eventSource = new EventSource("http://192.168.1.104:5001/stream");
  }

  componentDidMount() {
    this.eventSource.onmessage = e =>
      // this.updateFlightState(JSON.parse(e.data));
      console.log(e)
  }

  // updateFlightState(flightState) {
  //   let newData = this.state.data.map(item => {
  //     if (item.flight === flightState.flight) {
  //       item.state = flightState.state;
  //     }
  //     return item;
  //   });
  render() {
    return (
        // Render the list widget
        <DoorStatusWidget/>
    );
  }

}

export default DoorStatusContainer;