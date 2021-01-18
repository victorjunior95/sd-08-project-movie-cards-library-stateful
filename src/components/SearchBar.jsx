import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly, selectedGenre, onSelectedGenreChange } = this.props;
    return (<div>
      <form data-testid="search-bar-form" action="" />
    </div>);
  }
}

export default SearchBar;
