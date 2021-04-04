import React, { Component } from 'react';
import axios from 'axios';
import Widget from '../components/Widget';
import garageClosed from '../assets/Closed-Sign.svg';
import garageOpen from '../assets/Open-Sign.svg';

import Grid from '@material-ui/core/Grid';

import addNotification from 'react-push-notification';


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

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  getData() {
    return axios.get(`http://192.168.1.104:5001/climate`)
    .then(res => {
      console.log(res.data)
      this.setState({
        temp: res.data["temperature"],
        humidity: res.data["humidity"]
      });
      this.forceUpdate();
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
    } else {
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
      <Widget heading="Live Stream">
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        >
          {/* {this.showWidget()} */}
          {/* <iframe src="https://www.youtube.com/embed/owsfdh4gxyc"></iframe> */}
          {/* <video id="video" src="http://192.168.1.120:8081" autoplay="autoplay" /> */}
          <img src="http://192.168.1.120:8081?action=stream" width="256" height="144" />
        </Grid>
      </Widget>
    );
  }
}
