import React, { Component } from 'react';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Widget from '../components/Widget';

import '../styles/GarageClimateWidget.css';

export default class GarageClimateWidget extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      temp: undefined,
      humidity: undefined
    }

    this.getData = this.getData.bind(this);
    
  }

  componentDidMount() {
    this.getData();

    this.interval = setInterval(
      () => this.getData(),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    return axios.get(`http://192.168.1.104:5001/climate`)
    .then(res => {
      console.log(res.data)
      this.setState({
        temp: res.data["temperature"],
        humidity: res.data["humidity"]
      });
    })
    .catch(err => {
      console.error(err);
      this.setState({
        temp: "ERROR",
        humidity: "ERROR"
      });
    });
  }

  showWidget() {
    // console.log(garageOpen)
    if (this.state.temp === undefined || this.state.humidity === undefined) {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <a>Retrieving data...</a>
        </Grid>
      );
    } else if (this.state.temp === "ERROR" || this.state.humidity === "ERROR") {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <a>Load error.</a>
        </Grid>
      );
    }
    else {
      return (
        <div className="climateInfo">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <div className="p-2">
              Indoor Temperature
            </div>
            {/* <div>&nbsp;</div> */}
            <div className="p-2">
              <h2>
                {this.state.temp}°C
              </h2>
            </div>
            <div className="p-2">
              Humidity
            </div>
            {/* <div>&nbsp;</div> */}
            <div className="p-2">
              <h2>
                {this.state.humidity}%
              </h2>
            </div>
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <Widget heading="Garage Climate">
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
