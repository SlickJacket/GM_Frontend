import React from "react";

// Material ui imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    borderRadius: "50%",
    width: "600px",
    height: "600px",
    fontSize: "80px",
    fontFamily: "Rowdies",
    filter: "drop-shadow(0px 5px 15px #7e7e7e)",
    border: "10px solid #7ead5e",
    "&:hover": {
      border: "10px solid #599634",
    },
  },
}));

export default function CompleteButton() {
  const classes = useStyles();

  return (
    
    <Button variant="contained" color="primary" className={classes.button}>
      
    </Button>
      
  );
}
