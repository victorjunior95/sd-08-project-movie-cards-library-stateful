import React from 'react';

class SearchBar extends React.Component {
  render() {
    // const {
    //   movieName: { searchText, onSearchTextChange, bookmarkedOnly,
    //     onBookmarkedChange, selectedGenre, onSelectedGenreChange}
    // } = this.props;

    return (
      <div>
        SearchBar
        <input data-testid="search-bar-form" type="text" />
      </div>
    );
  }
}

export default SearchBar;
