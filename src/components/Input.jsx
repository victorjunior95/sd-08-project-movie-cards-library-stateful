import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelName, type, name } = props;

  return (
    <label htmlFor={ name } data-testid={ `${name}-input-label` }>
      {labelName}
      <input type={ type } name={ name } data-testid={ `${name}-input` } />
    </label>
  );
}

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
