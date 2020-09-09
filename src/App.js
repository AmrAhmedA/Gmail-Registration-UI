import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RegisterForm from "./components/registerForm"
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";


const warningTitleCSS =
  "color:red; font-size:50px; font-weight: bold; -webkit-text-stroke: 1px black;";
function App() {

  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: '100vh' }
        // spacing={5}
      }>
      {setTimeout(
        console.log.bind(console, "%c#Amr Ahmed", warningTitleCSS),
        0
      )}
      <RegisterForm />
    </Grid >);
}

export default App;
