import React from "react";
import AppBar from "../components/AppBar";
import CompleteButton from "../components/CompleteButton";

// To create the styles object
import { makeStyles } from "@material-ui/core/styles";

// Material UI imports
import Grid from "@material-ui/core/Grid";

// Styles Object
const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginTop: "5%",
  },
}));

export default function Home() {
  // Variable to enable ease of use of stlyes object
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center">
      <AppBar />

      <Grid item md={12}>
        <Grid container justify="center" className={classes.buttonContainer}>
          <Grid item md={4}>
            <CompleteButton />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
