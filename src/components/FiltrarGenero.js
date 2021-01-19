import React from 'react';
import PropTypes from 'prop-types';

class FiltrarGenero extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="select-input-label">
        Filtrar por gênero
        <select value={ value } onChange={ onChange } data-testid="select-input" name="selectedGenre">
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
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
export default FiltrarGenero;
