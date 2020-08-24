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
    textAlign: 'center'
  },
  dailyTotal: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '60px'
  },
  grandTotalBox: {
    textAlign: 'right',
    display: 'inline-block'
  }
}));

export default function Home() {
  // Variable to enable ease of use of stlyes object
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center">
      <AppBar />
      <Grid container md={12} justify={'flex-end'}>
        <Grid item md={1}>
          <div className={classes.grandTotalBox}>
            <span>$400</span>
          </div>
      </Grid>
      </Grid>
      <Grid item md={12}>
        <Grid container justify="center" className={classes.buttonContainer}>
          <Grid item md={12}>
            <h1 className={classes.dailyTotal}>$98</h1>
          </Grid>
          <Grid item md={12}>
            <CompleteButton />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
