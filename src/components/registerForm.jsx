import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
import Input from "./input";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      flexGrow: 1,

      // margin: theme.spacing(3),
      width: "100%",
    },
    margin: {
      margin: theme.spacing(1),
    },
  },
}));
const RegisterForm = () => {
  const classes = useStyles();

  return (
    // <Paper className={classes.root}>
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={3} sm={3}>
          <FormControl fullWidth>
            <Input
              id="firstname"
              name="firstname"
              label="Firstname"
              helperText="Write your first name"
            />
          </FormControl>
        </Grid>
        <Grid item xs={3} sm={3}>
          <FormControl fullWidth>
            <Input
              id="secondname"
              name="secondname"
              label="Secondname"
              helperText="Write your second name"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6}></Grid>
        <Grid item xs={6} sm={6}>
          <FormControl fullWidth>
            <Input
              id="username"
              name="username"
              label="Username"
              helperText="You can use letters, numbers &amp; periods"
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
