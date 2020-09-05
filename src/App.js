import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Input from "./components/input"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(8),
      width: '25ch',
    },
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className="container" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Paper>
        <div className="row">
          <div className="col-sm">
            <form className={classes.root} noValidate autoComplete="off">
              <Input id="username" name="username" placeholder="Username" label="Username" helperText="Write your first name" />
            </form>
          </div>
          <div className="col-sm">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField size="small" id="outlined-basic" label="Username" placeholder="AmrAhmed" variant="outlined" helperText="Incorrect entry."
              />
            </form>
          </div>
          <div className="col-sm">
            <form className={classes.root} noValidate autoComplete="off">
              {/* 
            <TextField size="small" id="outlined-basic" label="Username" placeholder="AmrAhmed" variant="outlined" helperText="Incorrect entry."
            /> */}
            </form>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default App;
