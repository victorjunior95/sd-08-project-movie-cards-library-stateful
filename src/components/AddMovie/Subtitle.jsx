import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { inputTextSubTitle } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          name="inputTextSubTitle"
          type="text"
          data-testid="subtitle-input"
          id="subtitle-input"
          value={ inputTextSubTitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Subtitle;