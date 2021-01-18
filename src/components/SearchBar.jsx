import React from 'react';

import PropTypes from 'prop-types';
import InputText from './InputText';
import InputCheckBox from './InputCheckBox';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText value={ searchText } onChange={ onSearchTextChange } />
        <InputCheckBox value={ bookmarkedOnly } onChange={ onBookmarkedChange } />
      </form>
    );
  }
}

SearchBar.defaultProps = {
  bookmarkedOnly: { false: false },
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
