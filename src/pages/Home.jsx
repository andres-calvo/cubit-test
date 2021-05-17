import { Container, makeStyles, Paper, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "20px",
  },
}));
function Home() {
  const themes = useTheme();
  const classes = useStyles(themes);
  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Paper elevation={4}>Hello</Paper>
    </Container>
  );
}

export default Home;
