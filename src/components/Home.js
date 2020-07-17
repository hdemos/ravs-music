import React from "react";
import "../App.css";

export default class Home extends React.Component {
    render() {
        return (
            <div className="main-body">
                <div className="page-content">
                <div>
                    <h1>Home Page</h1>
                </div>
                    <div className="container2">
                        <div className="bio">
                            <h2>Bio</h2>
                            <div className="text">

                            </div>
                        </div>
                        <div className="updates">
                            <h2>Updates</h2>
                        </div>
                    </div>
                    <div className="container1">
                        <div className="box-single">
                            <h2>Music</h2>
                        </div>
                    </div>
                    <div className="container1">
                        <div className="box-single">
                            <h2>Email Action</h2>
                        </div>
                    </div>
                    <div className="container1">
                        <div className="box-single">
                            <h2>Fashion</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

