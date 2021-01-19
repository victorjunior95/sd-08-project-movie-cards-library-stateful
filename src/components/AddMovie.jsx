import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ this.props.movies } />
        <AddMovie />
      </div>
    );
  }
}
