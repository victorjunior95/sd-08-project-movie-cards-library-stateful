import React, { Component } from 'react';

export default class InputSelect extends Component {
  constructor() {
    super();

    this.state = {
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  render() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="select">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          id="select"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}
