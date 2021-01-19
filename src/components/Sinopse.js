import React from 'react';

class Sinopse extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="storyline-input-label">
        Sinopse
        <input type="textarea" value={ value } data-testid="storyline-input" onChange={ onChange } name="storyline" />
      </label>
    );
  }
}
export default Sinopse;
