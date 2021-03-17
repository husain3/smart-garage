import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import openerLogo from '../assets/Garage-Opener-Logo.svg'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';

import '../styles/DoorOpenerButton.css';

export default function DoorOpenerButton() {
  const [open, setOpen] = React.useState(false);

  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getData(event) {
    event.preventDefault();
    handleClose();

    return axios({
      method: "post",
      url: "https://192.168.1.104:5000/openclose",
      headers: { "Authorization": "Basic "+ Buffer.from(`${username}:${password}`).toString('base64')},
    })
      .then(function (response) {
          // Update state with data
          // this.setState({ loading: false, data: response.data });
          setUserName('');
          setPassword('');
          console.log(response);
      })
      .catch(function (response){
          // At least tell the Widget component we have stopped loading
          console.log(response);
          setUserName('');
          setPassword('');
          // this.setState({ loading: false });
      });
  }
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    >
      <Button id="trigger" onClick={handleClickOpen}>
        <img src={openerLogo} className="App-logo" alt="garageOpener" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={getData} >
          <DialogTitle id="alert-dialog-title">{"Authentication"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please enter username and password
            </DialogContentText>
            <div>
              <TextField value={username}
                onInput={ e=>setUserName(e.target.value)}
                placeholder="Username"
                type="input"
                fullWidth={true}>
              </TextField>
            </div>
            &nbsp;
            <div>
              <TextField value={password}
                onInput={ e=>setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                fullWidth={true}>
              </TextField>
            </div>
          </DialogContent>
          <DialogActions>
            <Button id="cancelButton" onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" id="okButton" onClick={getData} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}
