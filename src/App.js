import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Question from "./pages/Question";

function App() {
  return (
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
  );
}

export default App;
