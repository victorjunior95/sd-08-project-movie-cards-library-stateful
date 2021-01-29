import React from 'react';
import PropTypes from 'prop-types';

class IncluiTexto extends React.Component {
  render() {
    const { search, textChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          value={ search }
          onChange={ textChange }
        />
      </label>
    );
  }
}

IncluiTexto.propTypes = {
  search: PropTypes.string.isRequired,
  textChange: PropTypes.func.isRequired,
};

export default IncluiTexto;
