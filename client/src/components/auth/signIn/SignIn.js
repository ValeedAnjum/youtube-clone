import React, { Fragment, useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Slide,
  Typography,
  LinearProgress,
  TextField,
} from "@material-ui/core";
import IconAndHeadingCon from "../IconAndHeadingCon/IconAndHeadingCon";

import InputField from "../../form/InputField";
import { withRouter } from "react-router-dom";

const SignIn = (props) => {
  const classes = useStyles();
  const { history } = props;
  const goToSignUp = () => {
    history.push("/signup");
  };
  const signIn = () => {
    console.log("do something");
    // props.history.goBack();
  };
  const changeEmailHan = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className={classes.signin}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid
          className={classes.contentContainer}
          item
          md={4}
          container
          direction="column"
          spacing={2}
        >
          {/* <LinearProgress
            variant="indeterminate"
            className={classes.progressBar}
          /> */}
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div>
              <Grid
                item
                container
                alignItems="center"
                direction="column"
                spacing={1}
                className={classes.iconHeadingContainer}
              >
                <IconAndHeadingCon heading="Sign in" classes={classes} />
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item sm={12} className={classes.textFieldCon}>
                    <InputField label="Email or phone" />
                  </Grid>
                  <Grid item xs={12} className={classes.textFieldCon}>
                    <InputField label="Password" />
                    <div>
                      <Typography className={classes.forgotHeading}>
                        Forgot password?
                      </Typography>
                    </div>
                    <Grid container justifyContent="space-between">
                      <Button
                        className={classes.createAccBtn}
                        onClick={goToSignUp}
                      >
                        Create account
                      </Button>
                      <Button className={classes.nextBtn} onClick={signIn}>
                        Next
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    signin: {
      width: "100%",
      height: "100vh",
      position: "absolute",
      top: "0",
      backgroundColor: "white",
      zIndex: "1202",
    },
    contentContainer: {
      border: "1px solid #0000002b",
      height: "80vh",
      borderRadius: "10px",
      flexWrap: "nowrap",
      overflow: "hidden",
    },
    iconHeadingContainer: {
      paddingTop: "50px !important",
    },
    mainContainer: {
      height: "100vh",
    },
    signInHeading: {
      fontFamily: "'Google Sans','Noto Sans Myanmar UI',arial,sans-serif",
      color: "#202124",
      fontSize: "24px",
      fontWeight: "400",
    },
    continueHeading: {
      color: "#202124",
      fontSize: "16px",
      fontWeight: "400",
    },
    forgotHeading: {
      color: "#1a73e8",
      fontWeight: "500",
      cursor: "pointer",
      display: "inline-block",
      padding: "10px 0px",
    },
    textFieldCon: {
      width: "90%",
    },
    createAccBtn: {
      color: "#1a73e8",
      textTransform: "initial",
      marginLeft: "-8px",
    },
    nextBtn: {
      textTransform: "initial",
      backgroundColor: "#1a73e8eb",
      color: "white",
      "&:hover": {
        backgroundColor: "#1a73e8",
      },
    },
    progressBar: {
      backgroundColor: "#e0e0e0",
    },
  };
});

export default withRouter(SignIn);
