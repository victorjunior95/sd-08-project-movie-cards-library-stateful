// implement MovieLibrary component here
// mais um comentario aqui pra lanxar minha beforeEachUnitTest

import React, {Component} from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import addMovie from './addMovie';

class MovieList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2> My awesome movie library</h2>
                <SearchBar />
                <MovieList movies={this.props.movies} />
                <addMovie />
            </div>
        );
    }
}

export default MovieLibrary;