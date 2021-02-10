import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import CheckboxInput from './CheckboxInput';
import SelectGenre from './SelectGenre';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <SearchInput searchText={ searchText } onChange={ onSearchTextChange } />
        <CheckboxInput checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <SelectGenre value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
