import React, {Component, Fragment } from 'react';
import Media from 'react-media';
import bitmap from './images/bitmap@2x.png';
import './Banner.scss';
import SearchBar from '../SearchBar/SearchBar';

class Banner extends Component {
    render() {
        return (
            <div>
                <header className="banner">
                    <img src={bitmap}/>
                    <div className="banner-items">
                        <h1 className="title">The Joke Bible</h1>
                        <h2 className="subtitle">Daily laughs for you and yours</h2>

                        <Media query="(min-width: 750px)" render={() =>
                            (
                                <SearchBar />
                            )}
                            />

                    </div>
 

                </header>
            </div>

        );
    }
}

export default Banner;