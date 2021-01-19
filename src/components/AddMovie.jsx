// import { render } from 'enzyme'
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  titulo() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ this.onChange }
        />
      </label>
    );
  }

  subtitulo() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.onChange }
        />
      </label>
    );
  }

  imagem() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.onChange }
        />
      </label>
    );
  }

  sinopse() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="estadoFavorito"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.onChange }
        />
      </label>
    );
  }

  avaliacao() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.onChange }
        />
      </label>
    );
  }

  genero() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select value={ genre } data-testid="genre-input">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    // const { onClick } = this.props

    return (
      <form data-testid="add-movie-form">
        { this.titulo() }
        { this.subtitulo() }
        { this.imagem() }
        { this.sinopse() }
        { this.avaliacao() }
        <button
          type="button"
          data-testid="send-button"
          onChange={ this.onChange }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
