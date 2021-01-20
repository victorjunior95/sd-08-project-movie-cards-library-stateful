// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: '',
  //   };
  // }
  render() {
    return (
      <AddMovie onClick={ (movie) => console.log(movie) } />
    );
  }
}

export default MovieLibrary;
