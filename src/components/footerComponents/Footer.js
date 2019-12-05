import React, { Component } from 'react';

import arrowRight from '../bodyComponents/JokeContainer/JokeBox/images/path-copy-2.png';
import './Footer.scss';
class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-text">
                    <span>GOT JOKES? GET PAID FOR SUBMITTING! </span>
                    <button>SUBMIT JOKE</button>
                </div>

            </div>
        )
    }
}

export default Footer;