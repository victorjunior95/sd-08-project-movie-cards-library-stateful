import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <label htmlFor="input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default InputAddMovie;

InputAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
};
