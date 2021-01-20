import React from 'react';

import PropTypes from 'prop-types';

class Favoritos extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            id="checkbox"
            data-testid="checkbox-input"
            type="checkbox"
            value={ value }
            onChange={ onChange }
            checked
          />
        </label>
      </div>
    );
  }
}

Favoritos.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Favoritos;
