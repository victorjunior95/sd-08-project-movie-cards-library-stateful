import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      filteredMovies: []
    }
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

  filterMovies = (arr) => {
    const { searchText,
      bookmarkedOnly,
      selectedGenre
    } = this.state;

    let filterList = arr;

    if (bookmarkedOnly === true) {
      filterList = arr.filter(movie => movie.bookmarked === bookmarkedOnly)
    }

    if (selectedGenre !== '') {
      filterList = arr.filter(movie => movie.genre === selectedGenre)
    }

    return filterList.filter((movie) => {

      if (movie.title.toLowerCase().includes(searchText.toLowerCase())) {
        return movie;
      }
      else if (movie.subtitle.toLowerCase().includes(searchText.toLowerCase())) {
        return movie;
      }
      else if (movie.storyline.toLowerCase().includes(searchText.toLowerCase())) {
        return movie;
      }
      
    });
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
          movies={this.filterMovies(this.state.movies)}
        />
        <AddMovie
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default MovieLibrary;
