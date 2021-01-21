import React, { Componet } from 'react';
import PropTypes from 'prop-types';

class ImageMovie extends Componet {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="input">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="image-input"
          id="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageMovie.PropTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImageMovie;
