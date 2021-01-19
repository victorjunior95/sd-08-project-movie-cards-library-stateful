import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelName, type, name, onChange } = props;

  return (
    <label htmlFor={ name } data-testid={ `${name}-input-label` }>
      {labelName}
      <input type={ type } name={ name } data-testid={ `${name}-input` } onChange={ onChange } />
    </label>
  );
}

Input.defaultProps = {
  onChange: null,
};
Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Input;
