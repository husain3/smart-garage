import React, { Component } from 'react';
import axios from 'axios';
import Widget from '../components/Widget';
import garageClosed from '../assets/Closed-Sign.svg';
import garageOpen from '../assets/Open-Sign.svg';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

import LogTable from '../components/LogTable'


export default class LogHistoryWidget extends Component {
  constructor(props) {
    super();
  }

  showWidget() {
    return (
      <LogTable />
    );
  }

  render() {
    return (
      <Widget heading="Garage Door Logs">
        {this.showWidget()}
      </Widget>
    );
  }
}
