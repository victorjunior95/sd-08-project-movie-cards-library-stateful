import React from 'react';

class Genre extends React.Component {
  render() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Genre;