import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Students from "./Components/Students";
import {
  BroswerRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1> Student List with Details</h1>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <redirect to="/studentlist" />}
          ></Route>
          <Route exact path="/studentlist" component={Students}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
