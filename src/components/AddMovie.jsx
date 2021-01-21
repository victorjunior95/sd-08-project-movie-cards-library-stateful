import React from 'react';

import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.formButton = this.formButton.bind(this);
  }

  onChangeHandler(event) {
    this.state(
      [event.target.name] = this.event.value,
    );
  }

  submitHandler(callback) {
    callback(this.state);
    this.state({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  titleInput(title, onChange) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }

  subtitleInput(subtitle, onChange) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }

  imageInput(imagePath, onChange) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }

  textAreaFunc(storyline, onChange) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }

  ratingInput(rating, onChange) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }

  genreSelect(genre, onChange) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  formButton(onClick) {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (event) => {
          event.preventDefault();
          this.submitHandler(onClick);
        } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.titleInput(title) }
        { this.subtitleInput(subtitle) }
        { this.imageInput(imagePath) }
        { this.textAreaFunc(storyline) }
        { this.ratingInput(rating) }
        { this.genreSelect(genre) }
        { this.formButton(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
