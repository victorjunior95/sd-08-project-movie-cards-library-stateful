import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  onSearchTextChange() {
    console.log('oi');
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText="oi"
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly
          onBookmarkedChange
          selectedGenre
          onSelectedGenreChange
        />
      </div>
    );
  }
}

export default MovieLibrary;
