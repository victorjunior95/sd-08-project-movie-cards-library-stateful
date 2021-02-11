import React, { Component } from 'react';

export default class InputImage extends Component {
  render() {
    const { func, imagePath } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="inputImage">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          id="inputImage"
          value={ imagePath }
          onChange={ func }
        />
      </label>
    );
  }
}
