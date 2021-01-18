/* eslint-disable jsx-a11y/label-has-associated-control */
// implement AddMovie component here

import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.setParameters = this.setParameters.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  setParameters({ target }) {
    const { name, value } = target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label data-testid="title-input-label">
          Título
          <input data-testid="title-input" name="title" onChange={ this.setParameters } type="text" value={ title } />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" name="subtitle" value={ subtitle } onChange={ this.setParameters } data-testid="subtitle-input" />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input type="text" name="imagePath" value={ imagePath } onChange={ this.setParameters } data-testid="image-input" />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" onChange={ this.setParameters } value={ storyline } data-testid="storyline-input" cols="30" rows="10" />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input type="number" name="rating" value={ rating } onChange={ this.setParameters } data-testid="rating-input" />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select name="genre" value={ genre } onChange={ this.setParameters } data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
