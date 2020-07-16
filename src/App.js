import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import {Route} from "react-router";
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <h1>Ravs Website</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/shows">Shows</Link></li>
        </ul>
        <hr />

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

function Home() {
  return(
      <div>
        <h2>Home</h2>
      </div>
  )
}

function About() {
  return(
      <div>
        <h2>About</h2>
      </div>
  )
}

function Music() {
  return(
      <div>
        <h2>Music</h2>
      </div>
  )
}

function Shows() {
  return(
      <div>
        <h2>Shows</h2>
      </div>
  )
}

export default App;
