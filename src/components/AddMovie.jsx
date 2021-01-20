// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  FInputTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  FInputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  FInputImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  FInputStoryline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          cols="30"
          rows="5"
          maxLength="200"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  FInputRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="ratinig" data-testid="storyline-input">
        Avaliação
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  FInputGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  FButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.handleClick }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <div>
          {this.FInputTitle()}
          {this.FInputSubtitle()}
          {this.FInputImage()}
          {this.FInputStoryline()}
          {this.FInputRating()}
          {this.FInputGenre()}
        </div>
        <div>
          {this.FButton()}
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = ({
  addNewMovie: PropTypes.func,
}).isRequired;
