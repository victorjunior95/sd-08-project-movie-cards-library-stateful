// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form" />
    );
  }
}
/*
SearchBar.propTypes = {
  searchText: PropType.string.isRequire,
  onSearchTextChange: PropType.func.isRequire,
  bookmarkedOnly: PropType.Bool.isRequire,
  onBookmarkedChange: PropType.func.isRequire,
  selectedGenre: PropType.string.isRequire,
  onSelectedGenreChange: PropType.func.isRequire,
};
*/
export default SearchBar;
