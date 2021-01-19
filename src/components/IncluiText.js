import React from 'react';

class Texto extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="text-input-label">
        Inclui o texto
        <input type="text" value={ value } data-testid="text-input" onChange={ onChange } name="searchText" />
      </label>
    );
  }
}
export default Texto;
