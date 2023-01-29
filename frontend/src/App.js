import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page layout
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/details/:id">
            <SingleProject />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
