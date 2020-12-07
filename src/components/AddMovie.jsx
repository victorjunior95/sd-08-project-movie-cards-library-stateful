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

  handleChange({ name, value }) {
    this.setState( { [name]: value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
        </label>
        <input data-testid="title-input" id="title-input"  value={this.state.title} onChange={this.handleChange}
/>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subitítulo
        </label>
        <input data-testid="subtitle-input" id="subtitle-input"  value={this.state.subtitle} onChange={this.handleChange} />

        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
        </label>
        <input data-testid="image-input" id="image-input" value={this.state.imagePath} onChange={this.handleChange} />

        <label data-testid="storyline-input-label" htmlFor="storyline-input" value={this.state.storyline} onChange={this.handleChange}>
          Sinopse
        </label>
        <input data-testid="storyline-input" id="storyline-input" value={this.state.storyline} onChange={this.handleChange}/>

        <label data-testid="rating-input-label" htmlFor="rating-input" >
          Avaliação

        </label>
        <input
          data-testid="rating-input" id="rating-input" type="number" value={this.state.rating} onChange={this.handleChange} />

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