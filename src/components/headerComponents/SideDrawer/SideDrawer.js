import React, {Component } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import logo from '../Toolbar/images/logo-horizontal-1.png';

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
                        <li className='logo-list-element'>
                            <img src={logo} alt='logo'/>
                        </li>
                        <li className='link-list-element'>
                            <a href='#'>SO FUNKTIONIERT'S</a>
                        </li>
                        <li className='link-list-element'>
                            <a href='#'>SONDERANGEBOTE</a>
                        </li>
                        <li className='dropdown-list-element'>
                        <Dropdown />
                        </li>
                    </ul>  
                </nav>
             
            </div>
        ) 
    }
}


export default SideDrawer;