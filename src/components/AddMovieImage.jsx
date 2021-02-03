import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <label htmlFor="addmovieimage" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          id="addmovieimage"
          onChange={ (event) => { changeState({ imagePath: event.target.value }); } }
        />
      </label>
    );
  }
}

export default AddMovieImage;

AddMovieImage.propTypes = {
  changeState: PropTypes.func.isRequired,
};
