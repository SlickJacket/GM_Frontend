import React from "react";
import AppBar from "../components/AppBar";

// To create the styles object
import { makeStyles } from "@material-ui/core/styles";

// Styles Object
const useStyles = makeStyles({});

export default function Home() {
  // Variable to enable ease of use of stlyes object
  const classes = useStyles();

  return <AppBar />;
}
