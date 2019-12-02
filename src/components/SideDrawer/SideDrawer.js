import React, {Component } from 'react';

class SideDrawer extends Component {


    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (
            <div>
                <nav className={drawerClasses}>
                    <ul>
                        <li>
                            <a href="\">SO FUNKTIONIERT'S</a>
                        </li>
                        <li>
                            <a href="\">SONDERANGEBOTE</a>
                        </li>
                    </ul>
                </nav>                
            </div>
        ) 
    }
}


export default SideDrawer;