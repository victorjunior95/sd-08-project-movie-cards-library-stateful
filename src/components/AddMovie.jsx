import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagemPath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInputTextTitle = this.renderInputTextTitle.bind(this);
    this.renderInputTextSubtitle = this.renderInputTextSubtitle.bind(this);
    this.renderInputTextImage = this.renderInputTextImage.bind(this);
    this.renderTextArea = this.renderTextArea.bind(this);
    this.renderInputNumber = this.renderInputNumber.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagemPath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderInputTextTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="movie-title" data-testid="title-input-label">
        Título
        <input
          id="movie-title"
          value={ title }
          data-testid="title-input"
          name="title"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderInputTextSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="movie-title"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderInputTextImage() {
    const { imagemPath } = this.state;
    return (
      <label htmlFor="movie-image" data-testid="image-input-label">
        Imagem
        <input
          name="imagemPath"
          id="movie-image"
          value={ imagemPath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTextArea() {
    const { storyline } = this.state;
    return (
      <label htmlFor="movie-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="movie-sinopse"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderInputNumber() {
    const { rating } = this.state;
    return (
      <label htmlFor="movie-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="movie-rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />

      </label>
    );
  }

  renderSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="movie-genre" data-testid="genre-input-label" value={ genre }>
        Gênero
        <select name="genre" id="movie-genre" data-testid="genre-input">
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

      </label>
    );
  }

  renderButton() {
    return (
      <button
        type="button"
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
        {this.renderInputTextTitle()}
        {this.renderInputTextSubtitle()}
        {this.renderInputTextImage()}
        {this.renderTextArea()}
        {this.renderInputNumber()}
        {this.renderSelect()}
        {this.renderButton()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
