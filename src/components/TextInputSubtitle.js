import React, { Component } from 'react';

export default class TextInputSubtitle extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="textSubtitle">
        Subtítulo
        <input
          id="textSubtitle"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
