import React from 'react';

class MovieLibrary extends React.Component {
    constructor() {
        super();

        const { movies } = this.props;

        this.state = {
            searchText: '',
            bookmarkedOnly: false,
            selectedGenre: '',
            movies: movies,
        }
    } 

    render() {        
        return (
            <div></div>
        )
    }
}

export default MovieLibrary;
