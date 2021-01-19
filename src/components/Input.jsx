import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { labelName, type, name, onChange, value } = props;
  const DEF_INPUT_PROPS = {
    type,
    name,
    'data-testid': `${name === 'imagePath' ? 'image' : name}-input`,
    value,
  };
  return (
    <label
      htmlFor={ name }
      data-testid={ `${name === 'imagePath' ? 'image' : name}-input-label` }
    >
      {labelName}
      <input { ...DEF_INPUT_PROPS } onChange={ onChange } />
    </label>
  );
}

Input.defaultProps = {
  type: 'text',
  onChange: null,
  value: '',
};

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
