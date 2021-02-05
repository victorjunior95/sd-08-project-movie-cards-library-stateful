import React, { Component } from 'react';

export default class InputRating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { rating } = this.state;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="inputRating"
      >
        Avaliação
        <input
          type="number"
          id="inputRating"
          value={ (rating) }
          name="rating"
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
