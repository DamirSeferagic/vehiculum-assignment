import React, {Component } from 'react';


import './Dropdown.scss';
import shape from './images/shape.png';
import path from './images/path_2.png';

class Dropdown extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
    }



    showMenu = () => {
        this.setState((prevState) => {
            return {showMenu: !prevState.showMenu};
        });
        //.style.width = elementWidth;
    };

    render() {
        return (
            <div className="dropdownButton">
                <button className="jokesDropdown"  onClick={this.showMenu}>
                    <img src={shape} className="buttonImg"></img>
                    <p className="buttonText">MEIN BEREICH</p>
                    <img src={path} className="buttonImg"></img>
                </button>
                
                {
                    this.state.showMenu 
                    ? (
                        <div className="dropdownList" >
                            <a href="#" className="dropdown-item">My published jokes</a>
                            <a href="#" className="dropdown-item" >My saved jokes</a>
                            <a href="#" className="dropdown-item">Account Information</a>
                            <a href="#" className="newJokeLink" >Publish new joke</a>
                        </div>
                    )
                    : (
                        null
                    )
                }

            </div>
        );
    }
}

export default Dropdown;