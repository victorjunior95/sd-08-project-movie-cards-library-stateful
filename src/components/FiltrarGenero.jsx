import React from 'react';
import PropTypes from 'prop-types';

class FiltrarGenero extends React.Component {
  render() {
    const { genre, genreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ genre }
          onChange={ genreChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

FiltrarGenero.propTypes = {
  genre: PropTypes.string.isRequired,
  genreChange: PropTypes.func.isRequired,
};

export default FiltrarGenero;
