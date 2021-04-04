import React, { Component } from 'react';
import axios from 'axios';
import Widget from '../components/Widget';
import garageClosed from '../assets/Closed-Sign.svg';
import garageOpen from '../assets/Open-Sign.svg';

import Grid from '@material-ui/core/Grid';

import addNotification from 'react-push-notification';
import '../styles/DoorLogsWidget.css';


export default class DoorLogsWidget extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      doorlogs: ""
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

  shouldComponentUpdate() {
    return true;
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   console.log("Inside componentDidUpdate")
  //   this.showWidget()
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    console.log("Inside Door Logs getData()")
    return axios.get(`http://192.168.1.104:5001/history`)
    .then(res => {
      console.log(res)
      this.setState({
        doorlogs: res.data
      });
      this.forceUpdate();
    })
    .catch(err => console.error(err))
  }

  showWidget() {
    // console.log(garageOpen)
    if (this.state.doorlogs === "") {
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
            className="doorlogview"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <pre>
              {this.state.doorlogs}
            </pre>
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <Widget heading="Door Use History">
        {this.showWidget()}
      </Widget>
    );
  }
}
