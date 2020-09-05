import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
import Input from "./input";
import Grid from "@material-ui/core/Grid";
// import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: theme.spacing(3),
    width: "100%",
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const handleClickShowPassword = () => {};
const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const RegisterForm = () => {
  const classes = useStyles();

  return (
    // <Paper className={classes.root}>
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={2} className={classes.margin}>
        <Grid item xs={3} sm={3}>
          <Input
            id="firstname"
            name="firstname"
            label="Firstname"
            helperText="Write your first name"
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <Input
            id="secondname"
            name="secondname"
            label="Secondname"
            helperText="Write your sun name"
          />
        </Grid>
        <Grid item xs={6} sm={6}></Grid>
        <Grid item xs={6} sm={6}>
          <Input
            id="username"
            name="username"
            label="Username"
            helperText="You can use letters, numbers &amp; periods"
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3} sm={3}>
          <Input id="password" name="password" label="Password" helperText="" />
        </Grid>
        <Grid item xs={2} sm={2}>
          <Input
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm"
            helperText=""
          />
        </Grid>
        <Grid item xs={1} sm={1}>
          <IconButton
            style={{
              height: "35px",
            }}
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {true ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </Grid>
        <Grid item xs={6} sm={6}></Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
