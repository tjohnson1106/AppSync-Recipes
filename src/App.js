import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Recipes from "./Recipes";
import AddRecipe from "./AddRecipe";
import Nav from "./Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />

            <Switch>
              <Route exact path="/" component={Recipes} />
              <Route path="/addrecipe" component={AddRecipe} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
