import { Box, Grid, Link, makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
  navDesktop: {
    display: "flex",
    position: "relative",
    width: "calc(100% - 200px)",
    justifyContent: "center",
    "& a": {
      margin: "0 10%",
      padding: "1em",
      "&:hover": {
        background: "#3f51b5",
        color: "white",
        borderRadius: "0.5em",
        transition: "border-radius 0.3s",
      },
    },
  },
  nav: {
    display: "none",
    borderLeft: "1px solid #d4d4d4",
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
      margin: "20px 0px",
    },
  },
  nav_close: {
    display: "none",
  },
}));

const buttonVariants = {
  open: {
    rotate: 360,
  },
  closed: {
    rotate: 0,
  },
};

const navVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: "-100%",
  },
};

function NavigationMobile(props) {
  const [open, setOpen] = useState(false);
  function toggleClass(openState) {
    return openState ? props.classes.nav_open : props.classes.nav_close;
  }
  function openMenu() {
    setOpen(!open);
  }
  return (
    <React.Fragment>
      <motion.div animate={open ? "open" : "closed"} variants={buttonVariants} display={{ xs: "block", sm: "none" }}>
        {open ? <CloseIcon onClick={() => openMenu()}></CloseIcon> : <MenuIcon onClick={() => openMenu()}></MenuIcon>}
      </motion.div>

      <motion.div animate={open ? "open" : "closed"} variants={navVariants} className={`${props.classes.nav} ${toggleClass(open)}`}>
        <Link component={RouterLink} to="/">
          Home
        </Link>
        <Link component={RouterLink} to="/question">
          Question
        </Link>
      </motion.div>
    </React.Fragment>
  );
}
function Navigation(props) {
  return (
    <React.Fragment>
      <Box className={props.classes.navDesktop}>
        <Link component={RouterLink} to="/" underline="none">
          Home
        </Link>
        <Link component={RouterLink} to="/question" underline="none">
          Question
        </Link>
      </Box>
    </React.Fragment>
  );
}

function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid container className={classes.root}>
      <h1>Test</h1>
      {!matches ? (
        <NavigationMobile width="100%" theme={theme} classes={classes}></NavigationMobile>
      ) : (
        <Navigation theme={theme} classes={classes}></Navigation>
      )}
    </Grid>
  );
}

export default Header;
