import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import {Route} from "react-router";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Music from "./components/Music";
import Shows from "./components/Shows";
import Popup from "./components/Popup";

import profile from "./utils/img/ravs-musician-profile-picture.jpg";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {showPopup: false};
  }

  togglePopup(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
    <Router>
      <div className="App">
        <div className="popup-div">
          <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>

          {this.state.showPopup ?
              <Popup
                  text='Click "Close Button" to hide popup'
                  closePopup={this.togglePopup.bind(this)}
              />
              : null
          }
        </div>
        <nav>
          <div id="circle-spacing">
            {/*placeholder for spacing*/}
            <div className="nav-space"></div>
          </div>
          <div id="circle-spacing">
            {/*placeholder for spacing*/}
            <div className="nav-space"></div>
          </div>
          <div className="nav-bar">
            <div className="nav-space">
              <div className="circle">
                <img className="img-circle" src={profile} />
              </div>
            </div>
            <div id="nav-list">
              <ul>
                <li ><Link to="/" className="li-1">Home</Link></li>
                <li><Link to="/about" className="li-2">About</Link></li>
                <li ><Link to="/music" className="li-3">Music</Link></li>
                <li ><Link to="/shows" className="li-4">Shows</Link></li>
              </ul>
            </div>

          </div>

        </nav>
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


        {/*</nav>*/}
        {/*{ this.props.children }*/}
      </div>
    </Router>
    );
  }
}

export default App;
