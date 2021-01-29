// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

import IncluiTexto from './IncluiTexto';
import MostrarFavoritos from './MostrarFavoritos';
import FiltrarGenero from './FiltrarGenero';

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
      <div>
        <form data-testid="search-bar-form">
          <IncluiTexto search={ searchText } textChange={ onSearchTextChange } />
          <MostrarFavoritos marked={ bookmarkedOnly } change={ onBookmarkedChange } />
          <FiltrarGenero genre={ selectedGenre } genreChange={ onSelectedGenreChange } />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
