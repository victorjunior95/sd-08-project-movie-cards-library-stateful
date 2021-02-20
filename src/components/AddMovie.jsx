import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  getNewTitle(onSearchTextChange) {
    return (
      <label data-testid="title-input-label" htmlFor="text-input">
        Título
        <input
          onChange={ onSearchTextChange }
          data-testid="title-input"
          title=""
        />
      </label>
    );
  }

  getNewSubTitle(onSearchTextChange) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="text-input">
        Subtítulo
        <input
          onChange={ onSearchTextChange }
          data-testid="subtitle-input"
          subtitle=""
        />
      </label>
    );
  }

  getNewMovieImage(onSearchTextChange) {
    return (
      <label data-testid="image-input-label" htmlFor="text-input">
        Imagem
        <input
          onChange={ onSearchTextChange }
          data-testid="image-input"
          imagePath=""
        />
      </label>
    );
  }

  getNewMovieStoryline(onSearchTextChange) {
    return (
      <label data-testid="storyline-input-label" htmlFor="text-input">
        Sinopse
        <textarea
          onChange={ onSearchTextChange }
          data-testid="storyline-input"
          storyline=""
        />
      </label>
    );
  }

  getNewMovieRating(onSearchTextChange) {
    return (
      <label data-testid="rating-input-label" htmlFor="text-input">
        Avaliação
        <input
          type="number"
          onChange={ onSearchTextChange }
          data-testid="rating-input"
          rating=""
          defaultValue={ 0 }
        />
      </label>
    );
  }

  render() {
    const { onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form" method="get">
          { this.getNewTitle(onSearchTextChange) }
          { this.getNewSubTitle(onSearchTextChange) }
          { this.getNewMovieImage(onSearchTextChange)}
          { this.getNewMovieStoryline(onSearchTextChange)}
          { this.getNewMovieRating(onSearchTextChange)}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
};

export default AddMovie;
