import React, { Component } from 'react';

export default class InputTextArea extends Component {
  constructor() {
    super();

    this.state = {
      storyline: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { storyline } = this.state;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="inputTextArea"
      >
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          id="inputTextArea"
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
