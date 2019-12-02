import React, {Component } from 'react';

class Backdrop extends Component {

    render() {
        return <div class="backdrop" onClick={this.props.click}/>
    }
}

export default Backdrop;