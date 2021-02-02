import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSelect extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ handleChange }
            data-testid="genre-input"
            id="genre-input"
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>
      </fieldset>
    );
  }
}

AddMovieSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieSelect;
