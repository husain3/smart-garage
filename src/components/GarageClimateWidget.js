import React, { Component } from 'react';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Widget from '../components/Widget';

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
        <div className="content">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            Indoor Temperature
            <div>
              <h1>
                {this.state.temp}°C
              </h1>
            </div>
          </Grid>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            Humidity
            <div>
              <h1>
                {this.state.humidity}%
              </h1>
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
