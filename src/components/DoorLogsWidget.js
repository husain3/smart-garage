import React, { Component } from 'react';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Widget from '../components/Widget';

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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    console.log("Inside DoorLogsWidget getData()")
    return axios.get(`http://192.168.1.104:5001/history`)
    .then(res => {
      console.log(res);
      this.setState({
        doorlogs: res.data
      });
    })
    .catch(err => {
      console.error(err);
      this.setState({
        doorlogs: "ERROR"
      });
    });
  }

  showWidget() {
    console.log("Inside DoorLogsWidget showWidget()")
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
    } else if (this.state.doorlogs === "ERROR") {
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
