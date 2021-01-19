import React from 'react';

class Imagem extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="image-input-label">
        Imagem
        <input type="text" value={ value } data-testid="image-input" onChange={ onChange } name="imagePath" />
      </label>
    );
  }
}
export default Imagem;
