import { Container, makeStyles, useTheme } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Question from "./pages/Question";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
}));
function App() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/question" exact>
            <Question></Question>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
