import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import { parse } from 'acorn';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies
    }
  }

  updateMovies = () => {

  }

  onSearchTextChange = ({ target }) => {
    const { value } = target;

    this.setState({
      searchText: value
    })
  }

  onBookmarkedChange = ({ target }) => {
    const { checked } = target;

    this.setState({
      bookmarkedOnly: checked
    })
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;

    this.setState({
      selectedGenre: value
    })
  }

  onClick = (obj) => {
    let rate = parseFloat(obj.rating);
    obj.rating = rate
    let newList = this.state.movies;
    newList.push(obj);
    this.setState({ movies: newList });
  }



  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList
          movies={this.state.movies}
        />
        <AddMovie
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default MovieLibrary;
