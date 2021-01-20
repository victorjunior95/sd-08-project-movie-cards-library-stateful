import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputType extends Component {
  render() {
    const { type, name, children, onChange,
      value, labelTestId, inputTestId, max, min, step } = this.props;
    return (
      <label htmlFor={ name } data-testid={ labelTestId }>
        { children }
        <input
          type={ type }
          id={ name }
          name={ name }
          data-testid={ inputTestId }
          onChange={ onChange }
          value={ value }
          max={ max }
          min={ min }
          step={ step }
        />
      </label>
    );
  }
}

InputType.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  labelTestId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
};

InputType.defaultProps = {
  max: 5,
  min: 0,
  step: 0.1,
};

export default InputType;
