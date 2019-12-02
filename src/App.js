import React, { Component } from 'react';

import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/Backdrop/Backdrop';
import Banner from './components/Banner/Banner';

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
