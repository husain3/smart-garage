import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Widget from './Widget';


export default class VideoStreamWidget extends Component {
  constructor(props) {
    super(props);
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
          <img src="http://192.168.1.137:8081/2/stream" width="256" height="144" />
        </Grid>
      </Widget>
    );
  }
}
