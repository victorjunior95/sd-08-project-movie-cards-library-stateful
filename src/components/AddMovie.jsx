import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      inputTextTitle: '',
      inputTextSubTitle: '',
      inputUrl: '',
      inputTextStoryline: '',
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderInputTitle() {
    const { inputTextTitle } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          name="inputTextTitle"
          type="text"
          data-testid="title-input"
          id="title-input"
          value={ inputTextTitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderInputStoryline() {
    const { inputTextStoryline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="inputTextStoryline"
          data-testid="storyline-input"
          id="storyline-input"
          value={ inputTextStoryline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          id="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderInputSubTitle() {
    const { inputTextSubTitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          name="inputTextSubTitle"
          type="text"
          data-testid="subtitle-input"
          id="subtitle-input"
          value={ inputTextSubTitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderInputImagePath() {
    const { inputUrl } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="inputUrl"
          type="text"
          data-testid="image-input"
          id="image-input"
          value={ inputUrl }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSelect() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
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
        { this.renderInputTitle() }
        { this.renderInputSubTitle() }
        { this.renderInputImagePath() }
        { this.renderInputStoryline()}
        { this.renderRating() }
        { this.renderSelect() }
      </form>
    );
  }
}

export default AddMovie;
