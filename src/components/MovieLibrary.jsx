import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => 'ok' }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => 'ok' }
          selectedGenre=""
          onSelectedGenreChange={ () => 'ok' }
        />
        <AddMovie onClick={ () => 'ok' } />
      </div>
    );
  }
}

export default MovieLibrary;
