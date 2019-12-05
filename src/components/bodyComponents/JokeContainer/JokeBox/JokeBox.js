import React, { Component } from 'react';
import './JokeBox.scss';
import lightingIcon from './images/green-light-copy-2.png';
class JokeBox extends Component {

    render() {
        return (
            <div className="joke-box-container">
                <div className="joke-title">
                    <img src={lightingIcon} alt="lightning icon"/>
                    <h1>{this.props.title.toUpperCase()}</h1>
                </div>
                <p>{this.props.text}</p>
                <button>SEE STATS</button>
            </div>
        )
    }
}


export default JokeBox;