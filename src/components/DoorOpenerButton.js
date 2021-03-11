import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import openerLogo from '../assets/Garage-Opener-Logo.svg'


import '../styles/DoorOpenerButton.css';

export default function DoorOpenerButton() {
  function getData() {    
    // Fetch data
    return axios({
      method: "post",
      url: "http://192.168.1.104:5000/openclose",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(function (response) {
          // Update state with data
          // this.setState({ loading: false, data: response.data });
          console.log(response);
      })
      .catch(function (response){
          // At least tell the Widget component we have stopped loading
          console.log(response);
          // this.setState({ loading: false });
      });
  }
  return (
    // <Button onClick={getData}><img src={garageOpen} className="App-logo" alt="garageOpen" /></Button>
    <Button onClick={getData}><img src={openerLogo} className="App-logo" alt="garageOpener" /></Button>

    );
}
