import React, {Component } from 'react';
import SearchButton from './SearchButton';



class SmallSearchBar extends Component {
    render() {
        return(
            <div   className="search-box-small">
                <input 
                    type="text" 
                    class="search-input" 
                    placeholder="Search..." />    
                <SearchButton />
            </div>            
        )
    }
}

export default SmallSearchBar