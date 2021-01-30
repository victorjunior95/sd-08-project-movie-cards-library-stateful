// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
    this.onClick = this.onClick.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  onClick() {
    return console.log('aaa');
  }

  onSearchTextChange(e) {
    const { value } = e.target;
    const { searchText } = this.state;
    this.setState({
      searchText: value,
      movies: Movies.filter((each) => each.includes(searchText)),
    });
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    const { selectedGenre } = this.state;
    this.setState({
      selectedGenre: value,
      movies: Movies.filter((each) => each.genre === selectedGenre),
    });
    if (selectedGenre.length === 0) {
      this.setState({
        movies: Movies,
      });
    }
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState((state) => ({
      bookmarkedOnly: !state.bookmarkedOnly,
    }));
    if (!bookmarkedOnly) {
      this.setState({
        movies: Movies.filter((e) => e.bookmarked),
      });
    } else {
      this.setState({
        movies: Movies,
      });
    }
  }

  onLoad(mov) {
    if (this.state === {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    }) {
      this.setState({
        movies: mov,
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { Movies } = this.props;
    this.onLoad(Movies);
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie onClick={ this.onClick } />
      </div>);
  }
}

MovieLibrary.propTypes = {
  Movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
