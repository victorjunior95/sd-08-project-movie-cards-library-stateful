import React, { Componet } from 'react';
import PropTypes from 'prop-types';

class RatingMovie extends Componet {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating-input"
          id="rating-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingMovie.PropTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingMovie;
