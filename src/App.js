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
          {/*<li><Link to="/about">About</Link></li>*/}
          {/*<li><Link to="/work">Work</Link></li>*/}
          {/*<li><Link to="/contact">Contact</Link></li>*/}
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
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

export default App;
