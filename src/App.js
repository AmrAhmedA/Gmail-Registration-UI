import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RegisterForm from "./components/registerForm"
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(5),
    padding: theme.spacing(3),
    // marginRight: theme.spacing(40),
    // marginLeft: theme.spacing(40),
    // marginTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container
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
      </Grid >
    </Container>);
}

export default App;
