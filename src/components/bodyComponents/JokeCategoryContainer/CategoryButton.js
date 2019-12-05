import React, { Component } from 'react';

import ArrowDownIcon from './images/path-copy-7.png';

class CategoryButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: this.getBackgroundColor(props.id),
            textColor: this.getTextColor(props.id),
            icon: this.getIcon(props.id)
        }

    }

    getIcon(id) {
        const icon = `url(${ArrowDownIcon})`;
        if (id===undefined) {
            return icon;
        } else {
            return 'none';
        }
    }

    getTextColor(id) {
        let textColor;
        if(id !== undefined) {
            textColor = 'white';
        } else {
            textColor = '#cfb995';
        }
        return textColor;
    }
    getBackgroundColor(id) {
        let color;
        switch (id) {
            case '1':
                color = '#ff5b5b';
                break;
            case '2':
                color = '#ffb347';
                break;
            case '3':
                color = '#fed8b1';
                break;
            case '4':
                color = '#b29700';
                break;
            case '5':
                color = '#9bbc88';
                break;
            case '6':
                color = '#3ae57f';
                break;
            case '7':
                color = '#57dbe6';
                break;
            default:
                color = 'white';
        }
        return color;
    }
    render() {
        return (
            <button
                // style={{ backgroundColor: this.state.backgroundcolor }}
                className="category-button"
                style = {{
                    backgroundImage: this.state.icon,
                    backgroundColor: this.state.backgroundColor,
                    color: this.state.textColor,
                    borderColor: this.state.textColor
                }}
                >{this.props.name.toUpperCase()}
            </button>
        )
    }
}

export default CategoryButton;