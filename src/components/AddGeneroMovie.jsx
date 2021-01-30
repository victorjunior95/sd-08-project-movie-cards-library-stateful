import React from 'react';
import PropTypes from 'prop-types';

class AddGeneroMovie extends React.Component {
  render() {
    const {
      genre,
      updateGenre,
    } = this.props;
    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ updateGenre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddGeneroMovie.propTypes = {
  genre: PropTypes.string.isRequired,
  updateGenre: PropTypes.func.isRequired,
};

export default AddGeneroMovie;
