import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };

    this.handleChange = this.handleChange.bind(this);

    this.movieNameInput = this.movieNameInput.bind(this);
    this.subtitleInput = this.subtitleInput.bind(this);
    this.imageInput = this.imageInput.bind(this);
    this.textInput = this.textInput.bind(this);
    this.ratingInput = this.ratingInput.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  movieNameInput(callback) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputTitle">
        Título:
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ callback }
          data-testid="title-input"
        />
      </label>
    );
  }

  subtitleInput(callback) {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ callback }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  imageInput(callback) {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="inputImage">
        Imagem:
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ callback }
        />
      </label>
    );
  }

  textInput(callback) {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="inputText">
        Sinopse:
        <input
          type="text"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ callback }
        />
      </label>
    );
  }

  ratingInput(callback) {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="inputRating">
        Avaliação:
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ callback }
        />
      </label>
    );
  }

  render() {
    return (
      <label htmlFor="inputMovie">
        <form data-testid="add-movie-form">
          { this.movieNameInput(this.handleChange) }
          { this.subtitleInput(this.handleChange) }
          { this.imageInput(this.handleChange)}
          { this.textInput(this.handleChange)}
          { this.ratingInput(this.handleChange)}
        </form>
      </label>
    );
  }
}

export default AddMovie;
