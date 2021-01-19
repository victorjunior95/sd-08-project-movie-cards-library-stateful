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
      storyLine: '',
      rating: '0',
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // const { onClick } = this.props;

  InputMovieTitle(title, callBack) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          title={ title }
          data-testid="title-input"
          onChange={ callBack }
        />
      </label>
    );
  }

  InputMovieSubtitle(subtitle, callBack) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ callBack }
        />
      </label>
    );
  }

  InputImagePath(imagePath, callBack) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ callBack }
        />
      </label>
    );
  }

  TextAreaStoryLine(storyLine, callBack) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyLine">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyLine }
          name="storyLine"
          id="stryLine"
          cols="30"
          rows="10"
          onChange={ callBack }
        />
      </label>
    );
  }

  InputRating(rating, callBack) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ callBack }
        />
      </label>
    );
  }

  SelectGenre(genre, callBack) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
          value={ genre }
          onChange={ callBack }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyLine, genre, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.InputMovieTitle(title, this.handleChange)}
        {this.InputMovieSubtitle(subtitle, this.handleChange)}
        {this.InputImagePath(imagePath, this.handleChange)}
        {this.TextAreaStoryLine(storyLine, this.handleChange)}
        {this.InputRating(rating, this.handleChange)}
        {this.SelectGenre(genre, this.handleChange)}
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
