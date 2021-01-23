import React, { Component } from 'react';

class AddMovie extends Component {
  InputText() {
    return (
      <label htmlFor="input_text" data-testid="title-input-label">
        Título
        <input id="input_text" type="text" data-testid="title-input" />
      </label>
    );
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        { this.InputText() }
      </form>
    );
  }
}

export default AddMovie;
