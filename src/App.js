import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import {Route} from "react-router";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Music from "./components/Music";
import Shows from "./components/Shows";

function App() {
  return (
  <Router>
    <div className="App">
      <h1>Ravs Website</h1>
      <nav>
        <div className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/shows">Shows</Link></li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Music">
            <Music />
          </Route>
          <Route path="/Shows">
            <Shows />
          </Route>
        </Switch>

      </nav>
      {/*{ this.props.children }*/}
    </div>
  </Router>
  );
}

export default App;
