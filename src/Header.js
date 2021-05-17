import { Box, Grid, Link, makeStyles, useTheme } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "0px 1rem",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #d4d4d4",
    boxShadow: "0px 10px 5px 0px rgba(0,0,0,0.26)",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  nav: {
    display: "none",
    borderLeft: "1px solid #d4d4d4",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginLeft: "25%",
      "& a": {
        margin: "0 16px",
      },
    },
  },
  nav_open: {
    display: "flex",
    flexFlow: "column",
    position: "absolute",
    padding: "16px",
    width: "35%",
    height: "100vh",
    background: "white",
    zIndex: "5",
    top: "80px",
    right: "0px",
    "& a": {
      margin: "8px 0px",
    },

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      position: "relative",
      top: "0",
      left: "0",
    },
  },
  nav_close: {
    display: "none",
  },
}));

function Navigation(props) {
  const [open, setOpen] = useState(false);
  console.log(props);
  function toggleClass(openState) {
    return openState ? props.classes.nav_open : props.classes.nav_close;
  }
  function openMenu() {
    setOpen(!open);
  }
  return (
    <React.Fragment>
      <Box display={{ xs: "block", sm: "none" }}>
        {open ? <CloseIcon onClick={() => openMenu()}></CloseIcon> : <MenuIcon onClick={() => openMenu()}></MenuIcon>}
      </Box>

      <Box className={`${props.classes.nav} ${toggleClass(open)}`}>
        <Link component={RouterLink} to="/">
          Home
        </Link>
        <Link component={RouterLink} to="/question">
          Question
        </Link>
      </Box>
    </React.Fragment>
  );
}

function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid container className={classes.root}>
      <h1>Test</h1>
      <Navigation width="100%" theme={theme} classes={classes}></Navigation>
    </Grid>
  );
}

export default Header;
