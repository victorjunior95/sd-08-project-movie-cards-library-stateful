import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          id="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Rating;