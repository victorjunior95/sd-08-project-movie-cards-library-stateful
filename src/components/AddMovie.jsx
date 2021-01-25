import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderTitleInput = this.renderTitleInput.bind(this);
    this.renderSubtitleInput = this.renderSubtitleInput.bind(this);
    this.renderImagePath = this.renderImagePath.bind(this);
    this.renderTextarea = this.renderTextarea.bind(this);
    this.renderNumberInput = this.renderNumberInput.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleChange(event) {
    return (
      this.setState({ [event.target.name]: event.target.value })
    );
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <label
        htmlFor="title-input"
        data-testid="title-input-label"
      >
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImagePath() {
    const { imagePath } = this.state;
    return (
      <label
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTextarea() {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderNumberInput() {
    const { rating } = this.state;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        Gênero
      </label>
    );
  }

  renderButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ null }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImagePath()}
        {this.renderTextarea()}
        {this.renderNumberInput()}
        {this.renderSelect()}
        {this.renderButton()}
      </form>
    );
  }
}

export default AddMovie;
