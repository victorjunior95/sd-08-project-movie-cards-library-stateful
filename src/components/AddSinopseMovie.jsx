import React from 'react';
import PropTypes from 'prop-types';

class AddSinopseMovie extends React.Component {
  render() {
    const {
      story,
      updateStore,
    } = this.props;
    return (
      <label htmlFor="input-text" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ story }
          onChange={ updateStore }
        />
      </label>
    );
  }
}

AddSinopseMovie.propTypes = {
  story: PropTypes.string.isRequired,
  updateStore: PropTypes.func.isRequired,
};

export default AddSinopseMovie;
