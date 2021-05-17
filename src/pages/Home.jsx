import { Container, makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "20px",
    padding: "16px",
    border: "1px solid #d4d4d4",
    boxShadow: "-10px 0px 5px 0px rgba(0,0,0,0.26),10px 0px 5px 0px rgba(0,0,0,0.26)",
  },
}));
function Home() {
  const themes = useTheme();
  const classes = useStyles(themes);
  return (
    <Container className={classes.wrapper} maxWidth="sm">
      Hello
    </Container>
  );
}

export default Home;
