import { Box, Grid, Link, makeStyles, useTheme } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 1rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      "& a": {
        margin: "0 8px",
      },
    },
  },
  nav_open: {
    display: "block",
    position: "absolute",
    top: "10px",
    left: "0px",
  },
}));

function Navigation(props) {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Box display={{ xs: "block", sm: "none" }}>
        {open ? <CloseIcon onClick={() => setOpen(!open)}></CloseIcon> : <MenuIcon onClick={() => setOpen(!open)}></MenuIcon>}
      </Box>

      <Box>
        <Link component={RouterLink} to="/">
          Home
        </Link>
        <Link component={RouterLink} to="/question">
          Question
        </Link>
      </Box>
    </Box>
  );
}

function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid container className={classes.root}>
      <h1>Test</h1>
      <Navigation props={{ theme, classes }}></Navigation>
    </Grid>
  );
}

export default Header;
