import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RegisterForm from "./components/registerForm"
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(5),
      padding: theme.spacing(3),
      width: theme.spacing(90),
      height: theme.spacing(65),
    },
  },
}));

function App() {
  const classes = useStyles();

  return (<Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }
      // spacing={5}
    }>

    <Paper variant="outlined" elevation={2} className={classes.root}>
      <RegisterForm />
    </Paper>
  </Grid>);
}

export default App;
