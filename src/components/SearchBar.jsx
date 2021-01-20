import React from 'react';

import PropTypes from 'prop-types';

import Favoritos from './favoritos.jsx';
import FiltraGenero from './filtragenero.js';
import IncluiTexto from './incluitexto.jsx';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <IncluiTexto value={ searchText } onChange={ onSearchTextChange } />
        <Favoritos value={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <FiltraGenero value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
