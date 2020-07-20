import React, {Component} from "react";
import "../App.css";
import tangled from "../utils/img/ravs-tangled-album.jpg";
import Popup from "./Popup";

export default class Home extends Component {
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
            <div className="main-body">
                <div className="page-content">
                {/*<div>*/}
                {/*    <h1>Home Page</h1>*/}
                {/*</div>*/}
                    <div className="container1">
                        <div className="box-single">
                            <div className="container2 margin-parent">
                                <div className="bio margin-child">
                                    <h2>Bio</h2>
                                    <div className="text">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </div>
                                <div className="updates margin-child">
                                    <h2>Updates</h2>
                                    <div className="text">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container1 .shadow">
                        <div className="box-single">
                            <h2>Music</h2>
                            <div className="container2 img-parent">
                                <div className="music-square img-child">
                                    <img className="music-img" src={tangled} label="Musician Ravs first album release: Tangled" alt="warm self portrait with a string of lights tangled in her hair "  />
                                    <div className="hover-btn">
                                    {/*    play btn*/}
                                    </div>
                                </div>
                                <div className="music-square img-child"  >
                                    <img className="music-img" src={tangled} label="Musician Ravs first album release: Tangled" alt="warm self portrait with a string of lights tangled in her hair "  />
                                    <div className="hover-btn">
                                    {/*    play btn*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container1">
                        <div className="box-single">
                            <h2>Email Action</h2>
                            <div className="popup-div">
                                <button onClick={this.togglePopup.bind(this)}> Yes </button>

                                {this.state.showPopup ?
                                    <Popup
                                        text='Click "Close Button" to hide popup'
                                        closePopup={this.togglePopup.bind(this)}
                                    />
                                    : null
                                }
                            </div>
                            <div className="cta-space"/>
                        </div>
                    </div>
                    <div className="container-col">
                        <div className="box-single">
                            <h2>Fashion</h2>
                            <div className="container2 img-parent">
                                <div className="music-square img-child">
                                    <img className="music-img" src={tangled} label="Musician Ravs first album release: Tangled" alt="warm self portrait with a string of lights tangled in her hair "  />
                                    <div className="hover-btn">
                                        {/*    play btn*/}
                                    </div>
                                </div>
                                <div className="music-square img-child"  >
                                    <img className="music-img" src={tangled} label="Musician Ravs first album release: Tangled" alt="warm self portrait with a string of lights tangled in her hair "  />
                                    <div className="hover-btn">
                                        {/*    play btn*/}
                                    </div>
                                </div>
                                <div className="music-square img-child"  >
                                    <img className="music-img" src={tangled} label="Musician Ravs first album release: Tangled" alt="warm self portrait with a string of lights tangled in her hair "  />
                                    <div className="hover-btn">
                                        {/*    play btn*/}
                                    </div>
                                </div>
                            </div>
                            <div className="container2 img-parent">
                                <div className="music-square img-child">
                                    <img className="music-img" src={tangled} label="Musician Ravs first album release: Tangled" alt="warm self portrait with a string of lights tangled in her hair "  />
                                    <div className="hover-btn">
                                        {/*    play btn*/}
                                    </div>
                                </div>
                                <div className="music-square img-child"  >
                                    <img className="music-img" src={tangled} label="Musician Ravs first album release: Tangled" alt="warm self portrait with a string of lights tangled in her hair "  />
                                    <div className="hover-btn">
                                        {/*    play btn*/}
                                    </div>
                                </div>
                                <div className="music-square img-child"  >
                                    <img className="music-img" src={tangled} label="Musician Ravs first album release: Tangled" alt="warm self portrait with a string of lights tangled in her hair "  />
                                    <div className="hover-btn">
                                        {/*    play btn*/}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


