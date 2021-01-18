// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  renderTitleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title-input"
          name="title-input"
          data-testid="title-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitleInput() }
      </form>
    );
  }
}

export default AddMovie;
