import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookMarkedOnly } = this.props;
    const {onBookMarkedChang, selectedGenre, onSelectedGenreChange } = this.props;

    return(
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          value={ searchText }
          onChange={ onSearchTextChange }>
          <input type="text" data-testid="text-input" />
        </label>
      </form>
    );
  }
}

SearchBar.proptypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func,
  bookMarkedOnly: PropTypes.bool,
  onBookMarkedChang: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func
}

export default SearchBar;