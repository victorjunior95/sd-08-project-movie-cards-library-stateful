// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.valueTitle = this.valueTitle.bind(this);
    this.valueSubTitle = this.valueSubTitle.bind(this);
    this.valueImagePath = this.valueImagePath.bind(this);
    this.valueStoryline = this.valueStoryline.bind(this);
    this.valueRating = this.valueRating.bind(this);
    this.valueGenre = this.valueGenre.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  valueTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  valueSubTitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  valueImagePath(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  valueStoryline(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  valueRating(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  valueGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  /*  addMovie(event) {
    // parei no requisito 14
  } */

  createInputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="titleInput">
        Título
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ this.valueTitle }
          id="titleInput"
        />
      </label>
    );
  }

  createInputSubTitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.valueSubTitle }
          id="subtitleInput"
        />
      </label>
    );
  }

  createInputImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imageInput">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.valueImagePath }
          id="imageInput"
        />
      </label>
    );
  }

  createInputStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          type="textarea"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.valueStoryline }
          id="storyline"
        />
      </label>
    );
  }

  createInputRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input-label"
          onChange={ this.valueRating }
          id="rating"
        />
      </label>
    );
  }

  createSelect() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ this.valueGenre }
          id="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  createButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.addMovie }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.createInputTitle() }
        { this.createInputSubTitle() }
        { this.createInputImage() }
        { this.createInputStoryline() }
        { this.createInputRating() }
        { this.createSelect() }
        { this.createButton() }

      </form>
    );
  }
}

export default AddMovie;
