import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };
  }

  addMovieTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input id="title-input" data-testid="title-input" onChange={ title } />
      </label>
    );
  }

  addMovieSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input id="title-input" data-testid="title-input" onChange={ subtitle } />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.addMovieTitle }
        { this.addMovieSubtitle }
      </form>
    );
  }
}

export default AddMovie;
