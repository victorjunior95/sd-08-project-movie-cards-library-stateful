import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.titleChange = this.titleChange.bind(this);
    this.subtitleChange = this.subtitleChange.bind(this);
    this.imgChange = this.imgChange.bind(this);
    this.storyChange = this.storyChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  titleChange({ target }) {
    const { value } = target;
    this.setState(() => ({ title: value }));
  }

  subtitleChange({ target }) {
    const { value } = target;
    this.setState(() => ({ subtitle: value }));
  }

  imgChange({ target }) {
    const { value } = target;
    this.setState(() => ({ imagePath: value }));
  }

  storyChange({ target }) {
    const { value } = target;
    this.setState(() => ({ storyline: value }));
  }

  ratingChange({ target }) {
    const { value } = target;
    this.setState(() => ({ rating: +value }));
  }

  selectChange({ target }) {
    const { value } = target;
    this.setState(() => ({ genre: value }));
  }

  resetState() {
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form" className="add-movie">
        <label htmlFor="addTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.titleChange }
            id="addTitle"
          />
        </label>

        <label htmlFor="addSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.subtitleChange }
            id="addSubtitle"
          />
        </label>

        <label htmlFor="addImg" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.imgChange }
            id="addImg"
          />
        </label>

        <label htmlFor="addTextArea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            cols="60"
            rows="1"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.storyChange }
            id="addTextArea"
            name="addTextArea"
          />
        </label>

        <label htmlFor="addRating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.ratingChange }
            id="addRating"
          />
        </label>

        <label htmlFor="addSelect" data-testid="genre-input-label">
          Gênero
          <select
            name="addSelect"
            id="addSelect"
            onChange={ this.selectChange }
            data-testid="genre-input"
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="send-button"
          onClick={ () => {
            onClick(this.state);
            this.resetState();
          } }
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
