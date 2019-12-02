import React, { Component } from 'react';

import './App.scss';
import Toolbar from './components/headerComponents/Toolbar/Toolbar';
import SideDrawer from './components/headerComponents/SideDrawer/SideDrawer';
import BackDrop from './components/headerComponents/Backdrop/Backdrop';
import Banner from './components/headerComponents/Banner/Banner';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickhandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {

    let backDrop;

    if (this.state.sideDrawerOpen) {

      backDrop = <BackDrop click={this.backdropClickhandler}/>;
    }
    return (
      <div style={{height:'100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop} 
          <Banner />
      </div>
    );    
  }
}

export default App;
