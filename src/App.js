import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RegisterForm from "./components/registerForm"
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";



function App() {

  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: '100vh' }
        // spacing={5}
      }>

      <RegisterForm />
    </Grid >);
}

export default App;
