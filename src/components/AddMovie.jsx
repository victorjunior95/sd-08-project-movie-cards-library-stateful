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
        <input data-testid="storyline-input" id="sinopse" type="text" />
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
        </form>
      </div>
    );
  }
}

export default AddMovie;
