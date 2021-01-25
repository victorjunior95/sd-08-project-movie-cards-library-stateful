// implement AddMovie component here
import PropTypes from 'prop-types';
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.Handler = this.Handler.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.baseState = this.state;
  }

  Handler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="text-input">
        Título
        <input
          data-testid="text-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.Handler }
        />
      </label>
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="text-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.Handler }
        />
      </label>
    );
  }

  inputImagePath() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="text-input">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.Handler }
        />
      </label>
    );
  }

  inputStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="text-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.Handler }
        />
      </label>
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="text-input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.Handler }
        />
      </label>
    );
  }

  inputGerne() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="text-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.Handler }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" selected value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  clickSendButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.baseState);
  }

  imputButton() {
    return (
      <button
        data-testid="send-button"
        onClick={ this.clickSendButton }
        type="button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.inputTitle()}
        {this.inputSubtitle()}
        {this.inputImagePath()}
        {this.inputStoryline()}
        {this.inputRating()}
        {this.inputGerne()}
      </form>

    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
