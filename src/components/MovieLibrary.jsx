import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      selected: [],
      GenreAll: props.movies,
      movies: props.movies,
    };
  }

  onSearchText = (event) => {
    const value = event.target.value;

    const filterTitle = this.props.movies.filter((movie) => movie.title.toLowerCase().includes(value));
    const filterSubtitle = this.props.movies.filter((movie) => movie.subtitle.toLowerCase().includes(value));
    const filterStoryline = this.props.movies.filter((movie) => movie.storyline.toLowerCase().includes(value));

    const moviesConcat = filterTitle.concat(filterSubtitle, filterStoryline);

    const moviesFilterAll = moviesConcat.filter((movies, i) => moviesConcat.indexOf(movies) === i);

    this.setState({
      [event.target.name]: event.target.value,
      movies: moviesFilterAll,
      GenreAll: moviesFilterAll,
    });
  }

  onBookmarkedChange = (event) => {
    const value = event.target.checked;
    this.setState({
      selected: this.state.movies,
    });

    if (value === true) {
      const filter = this.state.movies.filter((movie) => movie.bookmarked);
      this.setState({
        [event.target.name]: event.target.checked,
        movies: filter,
      })
    } else {
      this.setState({
        [event.target.name]: event.target.checked,
        movies: this.state.selected,
        GenreAll: this.state.selected,
      })
    }
  }

  onSelectedGenreChange = (event) => {
    const value = event.target.value;

    if(value !== '') {
      const filter = this.state.GenreAll.filter((movie) => movie.genre === value);
      this.setState({
        selectedGenre: value,
        movies: filter,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: this.state.GenreAll,
      });
    }
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.buttonAddMovie } />
      </main>
    );
  }
}

export default MovieLibrary;
