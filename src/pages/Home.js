import React from "react";
import AppBar from "../components/AppBar";
import CompleteButton from "../components/CompleteButton";

// To create the styles object
import { makeStyles } from "@material-ui/core/styles";

// Material UI imports
import Grid from "@material-ui/core/Grid";

// Styles Object
const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  // Variable to enable ease of use of stlyes object
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center">
      <AppBar />

      <Grid item md={11}>
        <Grid container justify="center">
          <Grid item>
            <CompleteButton />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
