import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  onSearchTextChange() {
    console.log('oi');
  }

  onBookmarkedChange() {
    console.log('eae');
  }

  onSelectedGenreChange() {
    console.log('q');
  }

  callbackParaAddmovie(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText="oi"
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ false }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.callbackParaAddmovie } />
      </div>
    );
  }
}

export default MovieLibrary;
