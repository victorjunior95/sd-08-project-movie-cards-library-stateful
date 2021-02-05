import React, { Component } from 'react';

export default class InputTextTitle extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <label htmlFor="textInput" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="textInput"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
