import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handlefilterMovie() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filter = [...movies];
    if (searchText) {
      filter = filter.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filter = filter.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      filter = filter.filter(({ genre }) => genre.includes(selectedGenre));
    }
    return filter;
  }

  handleAddMovie(object) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, object],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.handlefilterMovie } />
        <AddMovie onClick={ this.handleAddMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

// estudos para resoluções dos requisitos do MovieLibrary: https://github.com/tryber/sd-08-project-movie-cards-library-stateful/compare/rosieledavid-movie-cards-library-stateful#diff-f93a41729e61cd4c21f08e8fbbf630da87e14d18a479267fe157d29cafc00abc
