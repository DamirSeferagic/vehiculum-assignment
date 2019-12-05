import React, { Component } from 'react';

import './App.scss';
import Toolbar from './components/headerComponents/Toolbar/Toolbar';
import SideDrawer from './components/headerComponents/SideDrawer/SideDrawer';
import BackDrop from './components/headerComponents/Backdrop/Backdrop';
import Banner from './components/headerComponents/Banner/Banner';
import JokeCategoryContainer from './components/bodyComponents/JokeCategoryContainer/JokeCategoryContainer';
import JokeContainer from './components/bodyComponents/JokeContainer/JokesContainer';
import CategoryButton from './components/bodyComponents/JokeCategoryContainer/CategoryButton';
import Footer from './components/footerComponents/Footer';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickhandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {

    let backDrop;

    if (this.state.sideDrawerOpen) {

      backDrop = <BackDrop click={this.backdropClickhandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <Banner />
        <JokeCategoryContainer/>
        <h2 className="category-title">Social Jokes</h2>
        <div className="wrapper">
          <JokeContainer />
          <div className="view-more-button" >
            <CategoryButton 
            name="View More" />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
