import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default InputAddMovie;

InputAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
