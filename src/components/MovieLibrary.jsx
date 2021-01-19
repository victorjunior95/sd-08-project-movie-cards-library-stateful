// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.setFilterMovies = this.setFilterMovies.bind(this);
    this.setBookMarked = this.setBookMarked.bind(this);
    this.setFilterByGenre = this.setFilterByGenre.bind(this);
    this.subjectForm = this.subjectForm.bind(this);
  }

  setFilterMovies(event) {
    const { value } = event.target;
    this.setState(() => ({
      searchText: value,
    }));
  }

  setBookMarked(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      bookmarkedOnly: value,
    }));
  }

  setFilterByGenre(event) {
    const { value } = event.target;
    this.setState(() => ({
      selectedGenre: value,
    }));
  }

  subjectForm(newMovie) {
    const { movies } = this.state;
    const newList = movies.push(newMovie);
    this.setState(() => ({
      movies: newList,
    }));
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.setFilterMovies }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.setBookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.setFilterByGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.subjectForm } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
