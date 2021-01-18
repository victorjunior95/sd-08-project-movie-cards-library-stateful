import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange={ AS }
          bookmarkedOnly
          onBookmarkedChange={ AS }
          selectedGenre="oi"
          onSelectedGenreChange={ W }
        />
      </div>
    );
  }
}

export default MovieLibrary;
