import React, {Component } from 'react';
import SearchButton from './SearchButton';

class LargeSearchBar extends Component {
    render() {
        return(
            <div   className="search-box-large">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="How can we make you laugh today?" />    
                <SearchButton />
            </div>            
        )
    }
}

export default LargeSearchBar