import React, { Component } from 'react';

export default class InputImage extends Component {
  constructor() {
    super();

    this.state = {
      imagePath: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="inputImage">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          id="inputImage"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
