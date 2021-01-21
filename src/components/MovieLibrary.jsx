import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  filterMovie() {
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
        <MovieList movies={ this.filterFilms() } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

// estudos para resoluções dos requisitos do MovieLibrary: https://github.com/tryber/sd-08-project-movie-cards-library-stateful/compare/rosieledavid-movie-cards-library-stateful#diff-f93a41729e61cd4c21f08e8fbbf630da87e14d18a479267fe157d29cafc00abc
