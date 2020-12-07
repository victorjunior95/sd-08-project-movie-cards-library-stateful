import React from 'react';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
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
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input data-testid="title-input" id="title-input" value={title} onChange={this.handleChange} />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subitítulo
          <input data-testid="subtitle-input" id="subtitle-input" value={subtitle} onChange={this.handleChange} />
        </label>

        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input data-testid="image-input" id="image-input" value={imagePath} onChange={this.handleChange} />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline-input" value={storyline} onChange={this.handleChange}>
          Sinopse
          <input data-testid="storyline-input" id="storyline-input" value={storyline} onChange={this.handleChange} />
        </label>

        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input data-testid="rating-input" id="rating-input" type="number" value={rating} onChange={this.handleChange} />
        </label>

        <label data-testid="genre-input-label" htmlFor="selected-genre-input">
          Gênero
          <select onChange="" id="selected-genre-input">
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <input data-testid="genre-input" value={genre} />

        <button type="button" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}
