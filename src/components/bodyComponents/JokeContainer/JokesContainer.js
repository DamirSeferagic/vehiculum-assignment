import React, { Component } from 'react';
import jokes from '../../../data/jokes';
import JokeBox from './JokeBox/JokeBox';
import './JokesContainer.scss';

class JokesContainer extends Component {

    constructor() {
        super();
        this.state = {
            jokes: jokes
        }
    }

    render() {
        const jokes = this.state.jokes.map(joke =>
            <JokeBox
                key={joke.id}
                id={joke.id}
                title={joke.title}
                text={joke.text}
                likes={joke.likes} />
            )
        return (
            <div className="jokes-container">
                {jokes}
            </div>
        )
    }
}

export default JokesContainer;