import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);

    this.movieNameInput = this.movieNameInput.bind(this);
    this.subtitleInput = this.subtitleInput.bind(this);
    this.imageInput = this.imageInput.bind(this);
    this.textInput = this.textInput.bind(this);
    this.ratingInput = this.ratingInput.bind(this);
    this.buttonImput = this.buttonImput.bind(this);
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

  genreImput(callback) {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="ImputGenre">
        Gênero:
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ callback }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  buttonImput(event) {
    event.preventDefault();
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    const newMovie = { title, subtitle, imagePath, storyline, rating, genre };
    onClick(newMovie);
    this.setState({ title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form" onSubmit={ this.buttonImput }>
        { this.movieNameInput(this.handleChange) }
        { this.subtitleInput(this.handleChange) }
        { this.imageInput(this.handleChange)}
        { this.textInput(this.handleChange)}
        { this.ratingInput(this.handleChange)}
        { this.buttonImput}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.buttonImput }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
