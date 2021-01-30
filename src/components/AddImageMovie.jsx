import React from 'react';
import PropTypes from 'prop-types';

class AddImageMovie extends React.Component {
  render() {
    const {
      imgPath,
      changeImg,
    } = this.props;
    return (
      <label htmlFor="text-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imgPath }
          onChange={ changeImg }
        />
      </label>
    );
  }
}

AddImageMovie.propTypes = {
  imgPath: PropTypes.string.isRequired,
  changeImg: PropTypes.func.isRequired,
};

export default AddImageMovie;
