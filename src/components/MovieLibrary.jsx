import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies,
  //   };
  // }

  render() {
    // const { movies } = this.state;
    return (
      <div>
        <AddMovie onClick={ this.onClick } />
        <SearchBar />
        {/* <MovieList movies={ movies } /> */}
      </div>
    );
  }
}

export default MovieLibrary;
