import React, { Component } from 'react';
import axios from 'axios';
import Widget from '../components/Widget';
import garageClosed from '../assets/Closed-Sign.svg';
import garageOpen from '../assets/Open-Sign.svg';

import Grid from '@material-ui/core/Grid';

import addNotification from 'react-push-notification';

import jsonpickle from 'jsonpickle'

import '../styles/CameraFeedWidget.css';



export default class CameraFeedWidget extends Component {
  constructor(props) {
    super();
    
    this.state = {
      imageurl: 'https://192.168.1.104:5001/get_garage_feed'
    }
  }

  componentDidMount() {
    this.imgID = setInterval(() => {
      this.tickImg();
    }, 40000);
  }

  componentWillUnmount() {
    clearInterval(this.imgID);
  }

  tickImg() {
    this.setState({ imageurl: "https://192.168.1.104:5001/get_garage_feed?" + Math.random() });
  }

  render() {
    return (
      <Widget heading="Camera Feed">
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        >
          <img src={this.state.imageurl} className="photoFeed" alt="Retrieving feed..." />
        </Grid>
      </Widget>
    );
  }
}
