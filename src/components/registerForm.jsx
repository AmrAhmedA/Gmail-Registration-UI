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
import GoogleLogo from "../images/google_PNG19644.png";
import AccountLogo from "../images/account.svg";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: theme.spacing(3),
    width: "100%",
  },
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(2),
  },
  imgMargin: {
    margin: theme.spacing(3),
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
      <div className="container">
        <div className="row">
          <img
            src={GoogleLogo}
            alt=""
            width="80px"
            className={classes.imgMargin}
          ></img>
        </div>
        <div className={classes.padding}>
          <h4> Create your Google Account</h4>
        </div>
      </div>
      <Grid
        container
        // direction="row"
        // justify="flex-start"
        // alignItems="center"
      >
        <Grid item xs>
          <Grid container spacing={2} className={classes.margin}>
            <Grid item xs={6}>
              <Input
                id="firstname"
                name="firstname"
                label="First name"
                helperText="Write your first name"
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="secondname"
                name="secondname"
                label="Last name"
                helperText="Write your last name"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">@gmail.com</InputAdornment>
                  ),
                }}
                id="username"
                name="username"
                label="Username"
                helperText="You can use letters, numbers &amp; periods"
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="password"
                name="password"
                label="Password"
                helperText=""
              />
            </Grid>
            <Grid item xs={5}>
              <Input
                id="confirmpassword"
                name="confirmpassword"
                label="Confirm"
                helperText=""
              />
            </Grid>
            <Grid item xs={2}>
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
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
              >
                <Grid item xs>
                  <Button
                    href="#text-buttons"
                    style={{
                      textTransform: "none",
                      padding: "5px 20px ",
                      textAlign: "center",
                      fontSize: "15px",
                    }}
                    color="primary"
                  >
                    Sign in instead
                  </Button>
                </Grid>
                <Grid item xs>
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"
                  >
                    <button
                      className="btn btn-primary"
                      style={{
                        padding: "5px 25px 8px ",
                        fontSize: "15px",
                        textAlign: "center",
                      }}
                    >
                      Next
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container align="center">
            <Grid item xs>
              <img src={AccountLogo} alt="" width={250} />
              <label>
                One account. All of Google <br />
                working for you.
              </label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
