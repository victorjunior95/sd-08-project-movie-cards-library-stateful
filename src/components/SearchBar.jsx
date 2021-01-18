import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookMarkedOnly, onBookMarkedChang, selectedGenre, onSelectedGenreChange } = this.props;

    return(
      <form data-testid="search-bar-form" />
    );
  }
}

SearchBar.proptypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookMarkedOnly: PropTypes.bool,
  onBookMarkedChang: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func
}

export default SearchBar;