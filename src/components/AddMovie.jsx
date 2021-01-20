import React from 'react';

class AddMovie extends React.Component {
  inputTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input data-testid="title-input" id="title" type="text" />
      </label>
    );
  }

  inputSubtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input data-testid="subtitle-input" id="subtitle" type="text" />
      </label>
    );
  }

  inputImage() {
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input data-testid="image-input" id="image" type="text" />
      </label>
    );
  }

  inputSinopse() {
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="sinopse"
          id="sinopse"
          cols="30"
          rows="5"
        />
      </label>
    );
  }

  inputRating() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input data-testid="rating-input" id="rating" type="number" defaultValue="0" />
      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" action="">
          {this.inputTitle()}
          {this.inputSubtitle()}
          {this.inputImage()}
          {this.inputSinopse()}
          {this.inputRating()}
        </form>
      </div>
    );
  }
}

export default AddMovie;
