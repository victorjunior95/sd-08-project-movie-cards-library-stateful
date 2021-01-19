import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { name, children, onChange, value } = this.props;
    return (
      <label htmlFor={ name } data-testid="text-input-label">
        { children }
        <input
          type="text"
          id={ name }
          name={ name }
          data-testid="text-input"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
