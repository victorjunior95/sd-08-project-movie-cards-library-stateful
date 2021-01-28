// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input data-testid="title-input" type="text" />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" type="text" />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" type="text" />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input data-testid="rating-input" type="number" />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
