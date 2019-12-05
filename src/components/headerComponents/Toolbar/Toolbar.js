import React, {Component, Fragment } from 'react';
import Media from 'react-media';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Dropdown from '../Dropdown/Dropdown'
import logo from './images/logo-horizontal-1.png';
import logoSmall from './images/logo-horizontal-1_01.gif';
import SearchBar from '../SearchBar/SearchBar';

class Toolbar extends Component {
    render() {
        return (
            <div>
                <header className="toolbar">
                    <nav className="toolbar_navigation">
                        <div>
                            <DrawerToggleButton click={this.props.drawerClickHandler} />
                        </div>
                        <div className="toolbar_logo">
                            <img src={logo}/>
                                <a href="https://www.vehiculum.de/"/>

                        </div>

                        <div className="spacer"></div>    
                        <div className="toolbar_navigation_items">
                            <ul>
                                <li><a href="\">SO FUNKTIONIERT'S</a></li>
                                <li><a href="\">SONDERANGEBOTE</a></li>
                            </ul>
                        </div>
                        <div className="toolbar_navigation_items dropdown_button">
                        <Dropdown />
                        </div>
                        <Media query="(max-width: 749px)" render={() =>
                            (
                                <SearchBar />
                            )}
                            />   
                                        
                        <div className="smallLogo">
                            <img src={logoSmall}/>
                                <a href="https://www.vehiculum.de/"/>
                        </div>                        
                    </nav>
                </header>
            </div>
        );
    }
}


export default Toolbar;