import React, {Component } from 'react';


class DrawerToggleButton extends Component {

    render() {
        return (
            <button className="toggle-button" onClick={this.props.click}>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
                <div className="toggle-button__line"></div>
            </button>
        )
    }
}


export default DrawerToggleButton;