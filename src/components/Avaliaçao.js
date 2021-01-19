import React from 'react';

class Avaliacao extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="rating-input-label">
        Avaliação
        <input type="number" value={ value } data-testid="rating-input" onChange={ onChange } name="rating" />
      </label>
    );
  }
}
export default Avaliacao;
