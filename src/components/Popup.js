import React from "react";
import "../App.css";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <h2>{this.props.text}</h2>
                    <button onClick={this.props.closePopup}>Close</button>
                    <button onClick={this.props.closePopup}>I'm in!</button>
                </div>
            </div>
        );
    }
}

export default Popup;
