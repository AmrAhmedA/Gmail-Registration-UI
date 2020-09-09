import React from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  Button,
  Hidden,
  withWidth,
  Paper,
  Container,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";
import GoogleLogo from "../images/google_PNG19644.png";
import AccountLogo from "../images/account.svg";
import { Form, UseStyle } from "./form";
import Input from "./input";

const initialFieldValues = {
  id: 0,
  firstname: "",
  secondname: "",
  email: "",
  username: "",
  password: "",
  confirmpassword: "",
  showPassword: false,
};

const RegisterForm = () => {
  const {
    values,
    handleInputChange,
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
    renderInput,
  } = Form(initialFieldValues);

  const { root, margin, marginBottom, marginLogo } = UseStyle();

  return (
    // <Paper className={root}>
    <Container fixed maxWidth="md">
      <Paper variant="outlined" elevation={2}>
        <form className={root} onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} className={marginLogo}>
              <img src={GoogleLogo} alt="GoogleLogo" width="80px"></img>
            </Grid>
            <h4 className={marginBottom}>Create your Google Account</h4>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  {renderInput(
                    "firstname",
                    "firstname",
                    "First name",
                    "text",
                    ""
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  {renderInput(
                    "secondname",
                    "secondname",
                    "Last name",
                    "text",
                    ""
                  )}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Input
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          @gmail.com
                        </InputAdornment>
                      ),
                    }}
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    helperText="You can use letters, numbers &amp; periods"
                    value={values.username}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disableElevation
                    disableRipple
                    href="#text-buttons"
                    style={{
                      textTransform: "none",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                    color="primary"
                  >
                    Use my current email address instead
                  </Button>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                  {renderInput(
                    "password",
                    "password",
                    "Password",
                    values.showPassword ? "text" : "password",
                    ""
                  )}
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                  {renderInput(
                    "confirmpassword",
                    "confirmpassword",
                    "Confirm",
                    values.showPassword ? "text" : "password",
                    ""
                  )}
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
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
            <Hidden smDown>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Grid container align="center" className={margin}>
                  <Grid item xs>
                    <img src={AccountLogo} alt="" width={250} />
                    <label>
                      One account. All of Google <br />
                      working for you.
                    </label>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
RegisterForm.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(RegisterForm);
