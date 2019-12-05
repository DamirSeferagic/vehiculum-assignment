import React, {Component, Fragment } from 'react';
import Media from 'react-media';
import LargeSearchBar from './components/LargeSearchBar';
import SmallSearchBar from './components/SmallSearchBar';
import './SearchBar.scss';

class SearchBar extends Component {

    render() {
        return(
            <div className="search">
                <Media queries={{
                    small: "(max-width:399px)",
                    medium: "(min-width:400px) and (max-width:700px)",
                    large: "(min-width: 701px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.small && <SmallSearchBar/>}
                            {matches.medium && <LargeSearchBar/> }
                            {matches.large && <LargeSearchBar/>}
                        </Fragment>
                    )}
                </Media>                                           
            </div>
        );
    }
}

export default SearchBar;