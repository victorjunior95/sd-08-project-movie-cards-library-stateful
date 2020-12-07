import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);

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

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <textarea name="estadoFavorito" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input data-testid="title-input" id="title-input" />

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          <textarea name="subtitle" value={this.state.subtitle} onChange={this.handleChange} />

        </label>
        <input data-testid="subtitle-input" id="subtitle-input" />

        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
        </label>
        <input data-testid="image-input" id="image-input" />

        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea name="storyline" value={this.state.storyline} onChange={this.handleChange} />
        </label>
        <input data-testid="storyline-input" id="storyline-input" />

        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <textarea name="rating" value={this.state.rating} onChange={this.handleChange} />

        </label>
        <input
          data-testid="rating-input"
          id="rating-input"
          value={this.state.rating}
          type="number"
        />

        <label data-testid="genre-input-label" htmlFor="selected-genre-input">
          Gênero
          <select onChange={''} id="selected-genre-input">
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
        <input data-testid="genre-input" value={this.state.genre} />

        <button data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}