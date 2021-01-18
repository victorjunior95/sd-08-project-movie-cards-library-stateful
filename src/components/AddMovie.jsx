import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };
  }

  handleTitle(e) {
    const newTitle = e.target.value;
    this.setState({
      title: newTitle,
    });
  }

  handleSubtitle(e) {
    const newValue = e.target.value;
    this.setState({
      subtitle: newValue,
    });
  }

  addMovieTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  addMovieSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          id="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleSubtitle }
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.addMovieTitle() }
        { this.addMovieSubtitle() }
      </form>
    );
  }
}

export default AddMovie;
