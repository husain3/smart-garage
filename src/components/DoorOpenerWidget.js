import React, { Component } from 'react';
import axios from 'axios';
import Widget from './Widget'
import DoorOpenerButton from '../components/DoorOpenerButton'
import Grid from '@material-ui/core/Grid';


export default class DoorOpenerWidget extends Component {
  constructor(props) {
    super(props);
  }

  showWidget() {
    return (
      <DoorOpenerButton/>
    );
  }

  render() {
    return (
      <Widget heading="Opener">
        {this.showWidget()}
      </Widget>
    );
  }
}
