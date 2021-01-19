import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.name === 'rating' ? Number(target.value) : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleReset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleAdd() {
    const { propriedades } = this.props;
    propriedades.onClick(this.state);
    this.handleReset();
  }

  renderTitle() {
    const { title } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          <input
            type="text"
            name="title"
            id="title"
            data-testid="title-input"
            onChange={ this.handleChange }
            value={ title }
          />
        </label>
      </div>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo:
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            value={ subtitle }
          />
        </label>
      </div>
    );
  }

  renderImage() {
    const { imagePath } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem:
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
            value={ imagePath }
          />
        </label>
      </div>
    );
  }

  renderStoryline() {
    const { storyline } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse:
          <textarea
            name="storyline"
            id="storyline"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            value={ storyline }
          />
        </label>
      </div>
    );
  }

  renderRating() {
    const { rating } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação:
          <input
            type="number"
            id="rating"
            name="rating"
            data-testid="rating-input"
            onChange={ this.handleChange }
            value={ rating }
          />
        </label>
      </div>
    );
  }

  renderGenre() {
    const { genre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero:
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          onChange={ this.handleChange }
          value={ genre }
        >
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
        onClick={ this.handleAdd }
        name="button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">

          { this.renderTitle() }
          { this.renderSubtitle() }
          { this.renderImage() }
          { this.renderStoryline() }
          { this.renderRating() }
          { this.renderGenre() }
          { this.renderButton() }
        </form>
      </div>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}.isRequired;
