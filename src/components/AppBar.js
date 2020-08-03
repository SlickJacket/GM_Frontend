import React from "react";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";

// Styles object
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  appName: {
    color: theme.palette.primary.main,
    fontFamily: "Rowdies",
    marginLeft: "5%",
    width: "100%",
  },
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Appbar position="static" color="white">
        <Toolbar className={classes.toolbar}>
          <div>
            <Grid container>
              <Grid item>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.title}
                  variant="h4"
                  noWrap
                  className={classes.appName}
                >
                  GM
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container alignItems="center" spacing={3}>
              <Grid item>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                  // onClick={handleProfileMenuOpen}
                  //   color="primary"
                >
                  <MailIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                  // onClick={handleProfileMenuOpen}
                  //   color="primary"
                >
                  <NotificationsIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography variant="h6" className={classes.userName}>
                      Bobby BuffaloBoy
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      // aria-controls={menuId}
                      aria-haspopup="true"
                      // onClick={handleProfileMenuOpen}
                      color="primary"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </Appbar>
    </div>
  );
}
