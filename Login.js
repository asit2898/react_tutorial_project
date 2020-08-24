import React from 'react';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



function Details() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Currently only \"manager\" , \"sales_clerk\", \"admin\", profiles active. Enter any of these three. Password same as the profile name. '}
    </Typography>
  );
}

let validDetails = {
  manager:{pswd:'manager', type:'manager'}, 
  sales_clerk: {pswd:'sales_clerk', type:'sales_clerk'}, 
  admin: {pswd:'admin', type:'admin'}
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [profileName, setProfileName] = useState("");
  const [pswd, setPswd] = useState("");
  const [isLoggedIn, logIn] = useState("");

  function handleSubmit(){
    if (profileName in validDetails && validDetails[profileName].pswd === pswd){
      alert("Login Success! Type: " + validDetails[profileName].type);
    } 
    else{
      alert("Invalid details. Please try again!");
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h3" >
          Stock Management System
        </Typography>
        
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Profile Name"
            name="profileName"
            value = {profileName}
            onChange = {(e)=> setProfileName(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value = {pswd}
            onChange = {(e)=> setPswd(e.target.value)}
            
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={2}>
        <Details />
      </Box>
    </Container>
  );
}
