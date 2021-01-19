// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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

    this.handleResetState = this.handleResetState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleResetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.handleResetState();
  }

  titleInput(value, callback) {
    return (
      <div>
        <label
          htmlFor="searchText"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            id="searchText"
            value={ value }
            onChange={ callback }
            data-testid="text-input"
          />
        </label>
      </div>
    );
  }

  subtitleInput(value, callback) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ callback }
        />
      </label>
    );
  }

  imageInput(value, callback) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ callback }
        />
      </label>
    );
  }

  storylineInput(value, callback) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ callback }
        />
      </label>
    );
  }

  ratingInput(value, callback) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ callback }
        />
      </label>
    );
  }

  genreInput(value, callback) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
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

  buttonSubmit(callback) {
    return (
      <p>
        <button
          classeName="button"
          type="submit"
          onClick={ callback }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </p>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.titleInput(title, this.handleChange)}
        {this.subtitleInput(subtitle, this.handleChange)}
        {this.imageInput(imagePath, this.handleChange)}
        {this.storylineInput(storyline, this.handleChange)}
        {this.ratingInput(rating, this.handleChange)}
        {this.genreInput(genre, this.handleChange)}
        {this.buttonSubmit(this.handleSubmit)}
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
