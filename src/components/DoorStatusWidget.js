import React, { Component } from 'react';
import axios from 'axios';
import Widget from '../components/Widget';
import garageClosed from '../assets/Closed-Sign.svg';
import garageOpen from '../assets/Open-Sign.svg';

import Grid from '@material-ui/core/Grid';

import addNotification from 'react-push-notification';


export default class DoorStatusWidget extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      doorstatus: undefined,
      dateopened: undefined,
      timeopened: undefined
    }

    this.getData = this.getData.bind(this);
    
    // this.eventSource = new EventSource("http://192.168.1.104:5001/stream");
  }

  componentDidMount() {
    Notification.requestPermission();

    // this.eventSource.onmessage = e =>
    //   this.garageDoorTriggered(JSON.parse(e.data));

    this.getData();

    this.interval = setInterval(
      () => this.getData(),
      5000
    );
  }

  garageDoorOpened(){
    addNotification({
        title: 'ALERT: GARAGE DOOR OPENED',
        message: 'The garage door is now open',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
  };

  garageDoorClosed(){
    addNotification({
        title: 'ALERT: GARAGE DOOR CLOSED',
        message: 'The garage door is now closed',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
  };

  garageDoorStillOpen(minutes_opened){
    addNotification({
        title: 'ALERT: GARAGE DOOR STILL OPEN',
        message: `Garage door has been open for ${minutes_opened} minutes`,
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
  };

  garageDoorTriggered(garageState) {
    if(garageState.door_status === "closed") {
      this.garageDoorClosed();
    } else if (garageState.door_status === "opened") {
      this.garageDoorOpened();
    } else if (garageState.door_status === "still_open") {
      this.garageDoorStillOpen(garageState.minutes_opened);
    }
    this.getData();
  }

  getData() {
    console.log("Inside Door Status getData()")
    return axios.get(`http://192.168.1.104:5001/lastactivity`)
    .then(res => {
      console.log(res.data)
      this.setState({
        doorstatus: res.data["door_status"],
        dateopened: res.data["date"],
        timeopened: res.data["time"]
      });
      this.forceUpdate();
    });
  }

  showWidget() {
    // console.log(garageOpen)
    if(this.state.doorstatus === "OPENED") {
      return (<img src={garageOpen} className="App-logo" alt="garageOpen" />);
    } else if (this.state.doorstatus === "CLOSED") {
      return (<img src={garageClosed} className="App-logo1" alt="garageClosed" />);
    } else {
      return (<a>Retrieving data...</a>);
    }
  }

  render() {
    return (
      <Widget heading="Door Status">
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        >
          {this.showWidget()}
        </Grid>
      </Widget>
    );
  }
}
