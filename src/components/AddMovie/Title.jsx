import React from 'react';

class Title extends React.Component {
  render() {
    const { inputTextTitle } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          name="inputTextTitle"
          type="text"
          data-testid="title-input"
          id="title-input"
          value={ inputTextTitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Title;