import React, { Componet } from 'react';
import PropTypes from 'prop-types';

class TitleMovie extends Componet {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="input">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title-input"
          id="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleMovie.PropTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleMovie;
