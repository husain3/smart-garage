import React, { Component } from 'react';
import '../styles/VideoStreamWidget.css';
import Grid from '@material-ui/core/Grid';

import Widget from './Widget';


export default class VideoStreamWidget extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={this.spanStyles} className="Widget1">
        <img src="http://192.168.1.137:8081/4/stream" width="100%" height="auto" object-fit="contain" alt="description of image" />
      </div>
    );
  }
}
