import React from "react";
import "../App.css";
import Home from "../pages/Home";

// Material UI's theme provider to add the theme throughout entire application
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
