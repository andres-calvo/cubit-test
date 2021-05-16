import { Box, Grid, Link, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: "0px 1rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function Navigation() {
  return (
    <Box>
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
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <h1>Test</h1>
      <Navigation></Navigation>
    </Grid>
  );
}

export default Header;
