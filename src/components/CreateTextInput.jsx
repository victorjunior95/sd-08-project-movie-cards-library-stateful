// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTextInput extends Component {
  textInput(name, dataTestid, value, callBack) {
    return (
      <label htmlFor={ name } data-testid={ dataTestid }>
        { name }
        <input
          name={ name }
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ callBack }
        />
      </label>
    );
  }

  render() {
    const { name,
      dataTestid,
      text,
      inPutDataTestid,
      type, inputValue, callBack } = this.props;
    return (
      <label htmlFor={ name } data-testid={ dataTestid }>
        { text }
        <input
          id={ name }
          name={ name }
          data-testid={ inPutDataTestid }
          type={ type }
          value={ inputValue }
          onChange={ callBack }
        />
      </label>
    );
  }
}

CreateTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  inPutDataTestid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  callBack: PropTypes.func.isRequired,
};

export default CreateTextInput;
