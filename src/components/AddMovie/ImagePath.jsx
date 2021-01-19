import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { inputUrl } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="inputUrl"
          type="text"
          data-testid="image-input"
          id="image-input"
          value={ inputUrl }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default ImagePath;