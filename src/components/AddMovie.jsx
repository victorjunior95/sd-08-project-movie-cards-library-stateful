import PropTypes from 'prop-types';
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  inputText(title, callback) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título:
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ callback }
        />
      </label>
    );
  }

  inputSubtitle(subtitle, callback) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ callback }
        />
      </label>
    );
  }

  inputImgPath(imagePath, callback) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ callback }
        />
      </label>
    );
  }

  inputStoryline(storyline, callback) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          type="text"
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ callback }
        />
      </label>
    );
  }

  inputRating(rating, callback) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ callback }
        />
      </label>
    );
  }

  inputGenre(genre, callback) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          type="text"
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ callback }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" selected value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  addNewMovie() {
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

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.inputText(title, this.handleChange)}
          {this.inputSubtitle(subtitle, this.handleChange)}
          {this.inputImgPath(imagePath, this.handleChange)}
          {this.inputStoryline(storyline, this.handleChange)}
          {this.inputRating(rating, this.handleChange)}
          {this.inputGenre(genre, this.handleChange)}
          <button type="submit" data-testid="send-button" onClick={ this.addNewMovie }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
