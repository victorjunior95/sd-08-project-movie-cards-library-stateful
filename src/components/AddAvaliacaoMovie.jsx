import React from 'react';
import PropTypes from 'prop-types';

class AddAvaliacaoMovie extends React.Component {
  render() {
    const {
      rating,
      updateRating,
    } = this.props;
    return (
      <label htmlFor="input-number" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ updateRating }
        />
      </label>
    );
  }
}

AddAvaliacaoMovie.propTypes = {
  rating: PropTypes.number.isRequired,
  updateRating: PropTypes.func.isRequired,
};

export default AddAvaliacaoMovie;
