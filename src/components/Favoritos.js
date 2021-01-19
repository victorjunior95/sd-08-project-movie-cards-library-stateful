import React from 'react';

class Favoritos extends React.Component {
  render() {
    const { onChange, checked } = this.props;
    return (
      <label data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input type="checkbox" checked={ checked } onChange={ onChange } data-testid="checkbox-input" name="bookmarkedOnly" />
      </label>
    );
  }
}

export default Favoritos;
