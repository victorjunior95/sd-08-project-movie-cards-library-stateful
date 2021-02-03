import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <label htmlFor="addmovierating" data-testid="rating-input-label">
        Avaliação
        <input
          type="text"
          data-testid="rating-input"
          id="addmovierating"
          value="0"
          onChange={ (event) => {
            changeState({ rating: Number(event.target.value) });
          } }
        />
      </label>
    );
  }
}

export default AddMovieRating;

AddMovieRating.propTypes = {
  changeState: PropTypes.func.isRequired,
};
