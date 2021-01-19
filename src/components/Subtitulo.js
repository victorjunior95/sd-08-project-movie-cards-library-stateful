import React from 'react';

class Subtitulo extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="subtitle-input-label">
        Subtítulo
        <input type="text" value={ value } data-testid="subtitle-input" onChange={ onChange } name="subtitle" />
      </label>
    );
  }
}

export default Subtitulo;
