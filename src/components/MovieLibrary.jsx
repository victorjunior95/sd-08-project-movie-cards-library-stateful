import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    console.log(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    return (bookmarkedOnly === true
      ? this.setState({ bookmarkedOnly: false })
      : this.setState({ bookmarkedOnly: true }));
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  callbackParaAddmovie(state) {
    this.setState(state);
  }

  filter(array, searchText, selectedGenre, bookmarkedOnly) {
    return (
      array.filter((elem) => {
        if (bookmarkedOnly === true) {
          return elem.bookmarked === true;
        } return elem;
      }).filter((a) => {
        if (selectedGenre === '') {
          return a;
        } return a.genre === selectedGenre;
      }).filter((name) => (name.title.toUpperCase().includes(searchText.toUpperCase())))
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.callbackParaAddmovie } />
        <MovieList
          movies={ this.filter(movies, searchText, selectedGenre, bookmarkedOnly) }
        />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibrary;
