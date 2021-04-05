import React, { Component } from 'react';

import Widget from './Widget'
import DoorOpenerButton from '../components/DoorOpenerButton'

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
