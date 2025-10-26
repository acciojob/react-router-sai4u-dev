import React from "react";
import Home from './Home';
import About from './About';
import Navigation from './Navigation';
import { Route, Switch } from "react-router-dom"; // v5 uses Switch

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
