// implement AddMovie component here

import React, { Component } from 'react';

class AddMovie extends Component {
  addMovieTitleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Titulo
        <input type="text" data-testid="title-input" />
      </label>
    );
  }

  addMovieSubtitleInput() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtitulo
        <input type="text" data-testid="subtitle-input" />
      </label>
    );
  }

  addMovieStorylineInput() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea data-testid="storyline-input" cols="30" rows="10" />
      </label>
    );
  }

  addMovieImageInput() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagen
        <input type="text" data-testid="image-input" />
      </label>
    );
  }

  addMovieRatingInput() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input type="number" data-testid="rating-input" />
      </label>
    );
  }

  addMovieGenreSelect() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        <select data-testid="genre-input">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  addMovieButton() {
    return (
      <button data-testid="send-button" type="button">Adicionar filme</button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.addMovieTitleInput()}
        {this.addMovieSubtitleInput()}
        {this.addMovieGenreSelect()}
        {this.addMovieStorylineInput()}
        {this.addMovieImageInput()}
        {this.addMovieRatingInput()}
        {this.addMovieButton()}
      </form>
    );
  }
}

export default AddMovie;
