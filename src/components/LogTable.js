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
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TableBody } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const dataRows = [
  // createData('crawl', 'nightlight', 'blackberry'),
  // createData('crawl', 'nightlight', 'blackberry'),
  // createData('crawl', 'nightlight', 'blackberry'),
  // createData('crawl', 'nightlight', 'blackberry'),
  // createData('crawl', 'nightlight', 'blackberry')
];

function createData(door_status, date, time) {
  return { door_status, date, time };
}

function getData() {
  return axios.get(`https://192.168.1.104:5002/history`)
    .then(res => {
      res.data["garagedoor_usage_log"].forEach((item, i) => {
        console.log(item["door_status"], item["date"], item["time"])
        dataRows.push(createData(item["door_status"], item["date"], item["time"]));
      });
    });
}

export default function LogList() {
  const classes = useStyles();
  
  getData();

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableBody>
            {dataRows.map((row) => (
              <TableRow key={row.name}>
                {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                <TableCell align="right">{row["door_status"]}</TableCell>
                <TableCell align="right">{row["date"]}</TableCell>
                <TableCell align="right">{row["time"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
