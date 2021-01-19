import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  renderOption(selected, onSelected) {
    return (
      <select
        data-testid="select-input"
        value={ selected }
        onChange={ onSelected }
      >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    const {
      selected,
      onSelected,
    } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="text-input-label">
        Filtrar por gênero
        { this.renderOption(selected, onSelected) }
      </label>
    );
  }
}

SelectGenre.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default SelectGenre;
