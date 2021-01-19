// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  'title-input': '',
  'subtitle-input': '',
  'storyline-input': '',
  'rating-input': '0',
  'genre-input': 'action',
  'image-input': '',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      genres: [
        { value: 'action', text: 'Ação' },
        { value: 'comedy', text: 'Comédia' },
        { value: 'thriller', text: 'Suspense' },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(initialState);
    const { onClick } = this.props;
    onClick(event);
  }

  renderTitleInput() {
    const { 'title-input': titleInput } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title-input"
          name="title-input"
          data-testid="title-input"
          value={ titleInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { 'subtitle-input': subtitleInput } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle-input"
          name="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitleInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImageInput() {
    const { 'image-input': imageInput } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image-input"
          name="image-input"
          data-testid="image-input"
          value={ imageInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStoryLineInput() {
    const { 'storyline-input': storylineInput } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          id="storyline-input"
          name="storyline-input"
          data-testid="storyline-input"
          value={ storylineInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRatingInput() {
    const { 'rating-input': ratingInput } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          name="rating-input"
          data-testid="rating-input"
          value={ ratingInput }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenreOptions(genres) {
    return genres.map((genre, index) => (
      <option
        data-testid="genre-option"
        value={ genre.value }
        key={ index }
      >
        {genre.text}
      </option>
    ));
  }

  renderGenreInput() {
    const { 'genre-input': genreInput, genres } = this.state;
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          type="number"
          id="genre-input"
          name="genre-input"
          data-testid="genre-input"
          value={ genreInput }
          onChange={ this.handleChange }
        >
          { this.renderGenreOptions(genres) }
        </select>
      </label>
    );
  }

  renderFormButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.handleSubmit }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitleInput() }
        { this.renderSubtitleInput() }
        { this.renderImageInput() }
        { this.renderStoryLineInput() }
        { this.renderRatingInput() }
        { this.renderGenreInput() }
        { this.renderFormButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
