// implement AddMovie component here
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
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    console.log(target.name);
    // this.setState({ title: target.value });
  }
  render() {
    return (
      <form>
        <label data-testid="title-input-label">
          Título
          <input data-testid="title-input" type="text" name="title" value={ this.state.title } onChange={ this.handleChange } />
        </label>
        {/* <label data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" type="text" value={ this.state.subtitle } onChange={ this.handleChange } />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" type="text" value={ this.state.imagePath } onChange={ this.handleChange } />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" value={ this.state.storyline } onChange={ this.handleChange }></textarea>
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input data-testid="rating-input" type="number" value={ this.state.rating } onChange={ this.handleChange } />
        </label>
        <label data-testid="genre-input-label">
        Gênero
          <select data-testid="genre-input" value={ this.state.genre } onChange={ this.handleChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick= { this.handleChange }>Adicionar filme</button> */}
      </form>
    );
  }
}

export default AddMovie;
