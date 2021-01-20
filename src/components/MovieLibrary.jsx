// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.setState = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
    }
  }

  onSearchTextChange = (event) =>{
      return 'oi'
  }

  onBookmarkedChange = (event) => {
      return 'tudo bom'
  }

  onSelectedGenreChange = (event) => {
      return 'haha'
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
            searchText={ this.state.searchText }
            onSearchTextChange={ this.onSearchTextChange }
            bookmarkedOnly= { this.state.bookmarkedOnly }
            onBookmarkedChange={ this.onBookmarkedChange }
            selectedGenre={ this.state.selectedGenre }
            onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;