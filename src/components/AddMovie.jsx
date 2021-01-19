import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  title() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          onChange={ this.handleChange }
          id="title"
        />
      </label>
    );
  }

  subtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          id="subtitle"
        />
      </label>
    );
  }

  imagePath() {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          onChange={ this.handleChange }
          id="imagePath"
        />
      </label>
    );
  }

  storyline() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          onChange={ this.handleChange }
          id="storyline"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.title()}
        {this.subtitle()}
        {this.imagePath()}
        {this.storyline()}
      </form>
    );
  }
}

export default AddMovie;
