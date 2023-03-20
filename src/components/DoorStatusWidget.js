import React, { Component } from 'react';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Widget from '../components/Widget';

import garageClosed from '../assets/Closed-Sign.svg';
import garageOpen from '../assets/Open-Sign.svg';

export default class DoorStatusWidget extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      doorstatus: undefined
    }

    this.getData = this.getData.bind(this);

    this.showWidget = this.showWidget.bind(this);
  }

  componentDidMount() {
    this.getData();

    this.interval = setInterval(
      () => this.getData(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    console.log("Inside DoorStatusWidget getData()")
    return axios.get(`http://192.168.1.43:8000/j`)
    .then(res => {
      console.log(res.data)
      this.setState({
        doorstatus: res.data["door_sensor"]["lowerSensorStatus"]
      });
    })
    .catch(err => {
      console.error(err);
      this.setState({
        doorstatus: "ERROR",
        dateopened: undefined,
        timeopened: undefined
      });
    });
  }

  showWidget() {
    console.log("Inside DoorStatusWidget showWidget()")
    console.log(this.state);
    if(this.state.doorstatus === "LOW") {
      return (<img src={garageOpen} className="App-logo" alt="garageOpen" />);
    } else if (this.state.doorstatus === "HIGH") {
      return (<img src={garageClosed} className="App-logo1" alt="garageClosed" />);
    } else if (this.state.doorstatus === "ERROR") {
      return (<a>Load error.</a>);
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
