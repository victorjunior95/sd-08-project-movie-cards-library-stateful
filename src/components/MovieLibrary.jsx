import React, { Component } from 'react';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  movieAdd() {
  // this.setState((stateanterior)=> {
  //   return {
  //     movies:{movies:[...stateanterior.movies.movies,state]}
  //   }
  // })
  }

  render() {
    return (
      <AddMovie onClick={ this.movieAdd } />
    );
  }
}

export default MovieLibrary;
