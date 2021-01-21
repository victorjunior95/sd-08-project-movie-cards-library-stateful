import React, { Componet } from 'react';
import PropTypes from 'prop-types';

class StorylineMovie extends Componet {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          name="storyline-input"
          id="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineMovie.PropTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StorylineMovie;
