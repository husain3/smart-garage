import React, { Component } from 'react';
import axios from 'axios';
import Widget from '../components/Widget';
import garageClosed from '../assets/Closed-Sign.svg';
import garageOpen from '../assets/Open-Sign.svg';

import addNotification from 'react-push-notification';


export default class DoorStatusWidget extends Component {
  constructor(props) {
    super();
    
    this.state = {
      doorstatus: undefined,
      dateopened: undefined,
      timeopened: undefined
    }

    this.getData = this.getData.bind(this);
    
    this.eventSource = new EventSource("http://192.168.1.104:5001/stream");
  }

  componentDidMount() {
    Notification.requestPermission();

    this.eventSource.onmessage = e =>
      this.garageDoorTriggered(JSON.parse(e.data));

    this.getData().then(_ => {
      this.interval = 
        setInterval(this.getData, 5000);
    });
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

  garageDoorTriggered(garageState) {
    if(garageState.door_status === "closed") {
      this.garageDoorClosed();
    } else if (garageState.door_status === "opened") {
      this.garageDoorOpened();
    }
    this.getData();
  }

  getData() {
    return axios.get(`http://192.168.1.104:5002/lastactivity`)
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
    // console.log(this.state.dateopened)
    if(this.state.doorstatus === "opened") {
      // return <a>opened</a>;
      return (<img src={garageOpen} className="App-logo" alt="garageOpen" />);
    } else if (this.state.doorstatus === "closed") {
      return (<img src={garageClosed} className="App-logo1" alt="garageClosed" />);
    } else {
      return (<a>dunno</a>);
    }
    // return(
    //   <ul>
    //     { <a>{this.state.doorstatus}</a>}
    //     { <a>{this.state.dateopened}</a>}
    //     { <a>{this.state.timeopened}</a>}
    //   </ul>
    //   // console.log(this.state)
    // );
  }

  render() {
    return (
      <Widget heading="Door Status">
        {this.showWidget()}
      </Widget>
    );
  }
}
