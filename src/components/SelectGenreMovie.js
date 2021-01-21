import React, { Componet } from 'react';
import PropTypes from 'prop-types';

class SelectGenreMovie extends Componet {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre-input"
          id="genre-input"
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenreMovie.PropTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectGenreMovie;
