import React from 'react';
import PropTypes from 'prop-types';

class SelectInputLabel extends React.Component {
  render() {
    const { value, onChange, dataTesteId, dataLabelTesteId, dataOptTesteId } = this.props;

    return (
      <label htmlFor={ dataTesteId } data-testid={ dataLabelTesteId }>
        Filtrar por gênero
        <select
          name={ dataTesteId }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTesteId }
        >
          <option data-testid={ dataOptTesteId } value="">Todos</option>
          <option data-testid={ dataOptTesteId } value="action">Ação</option>
          <option data-testid={ dataOptTesteId } value="comedy">Comédia</option>
          <option data-testid={ dataOptTesteId } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInputLabel.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTesteId: PropTypes.string.isRequired,
  dataLabelTesteId: PropTypes.string.isRequired,
  dataOptTesteId: PropTypes.string.isRequired,
};

export default SelectInputLabel;
