import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    // console.log(target.name);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  renderTitleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ this.state.title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ this.state.subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImageInput() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ this.state.imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStorylineInput() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ this.state.storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRatingInput() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ this.state.rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenreInput() {
    return (
      <label htmlFor="subtitle-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ this.state.genre }
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>

    );
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitleInput() }
        { this.renderSubtitleInput() }
        { this.renderImageInput() }
        { this.renderStorylineInput() }
        { this.renderRatingInput() }
        { this.renderGenreInput() }
        <button
        data-testid="send-button"
        onClick= { this.handleChange }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
