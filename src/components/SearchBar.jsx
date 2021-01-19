import React from 'react';

import PropTypes from 'prop-types';
import FiltrarGenero from './FiltrarGenero';
import Favoritos from './Favoritos';
import Text from './IncluiText';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <Text onChange={ onSearchTextChange } value={ searchText } />
          <Favoritos onChange={ onBookmarkedChange } checked={ bookmarkedOnly } />
          <FiltrarGenero onChange={ onSelectedGenreChange } value={ selectedGenre } />
        </form>
      </div>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,

};

export default SearchBar;
