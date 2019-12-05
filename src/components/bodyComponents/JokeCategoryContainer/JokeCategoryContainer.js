import React, { Component } from 'react';
import categories from '../../../data/categories';
import CategoryButton from './CategoryButton'
import './JokeCategoryContainer.scss';


class JokeCategoryContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            jokeCategories: categories
        }
    }

    render() {
        const jokeCategories = this.state.jokeCategories.map(item => 
            <CategoryButton 
                key={item.id}
                id={item.id}
                name={item.name} />)

        return (
            <div className="category-container">
                {jokeCategories}
                <CategoryButton name="View All" />
            </div>
        );
    }
}

export default JokeCategoryContainer;