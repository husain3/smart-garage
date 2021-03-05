import React, { Component } from 'react';
import axios from 'axios';
import Widget from './Widget'
import DoorOpenerButton from '../components/DoorOpenerButton'

export default class DoorOpenerWidget extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  // showWidget() {
  //   <ul style={{listStyleType: "none"}}>
  //     { this.state.persons.map(person => <li>{person.name}</li>)}
  //     { this.state.persons.map(person => <li>{person.name}</li>)}
  //   </ul>
  // }

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
