import React from 'react';

class Storyline extends React.Component {
  render() {
    const { inputTextStoryline } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="inputTextStoryline"
          data-testid="storyline-input"
          id="storyline-input"
          value={ inputTextStoryline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Storyline;