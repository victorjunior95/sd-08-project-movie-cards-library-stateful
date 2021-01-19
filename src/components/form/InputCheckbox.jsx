import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends Component {
  render() {
    const { name, children, onChange, value } = this.props;
    return (
      <label htmlFor={ name } data-testid="checkbox-input-label">
        { children }
        <input
          type="checkbox"
          id={ name }
          name={ name }
          data-testid="checkbox-input"
          onChange={ onChange }
          checked={ value }
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default InputCheckbox;
