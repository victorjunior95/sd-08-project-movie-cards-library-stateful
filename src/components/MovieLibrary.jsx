// implement MovieLibrary component here
import React from 'react';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText:'',
      bookmarkedOnly:false,
      selectedGenre:'',
      movies: ""
    };
  }

  render() {
    return (
      <h1>Eu sou Movie Library</h1>
    );
  }
}

export default MovieLibrary;
