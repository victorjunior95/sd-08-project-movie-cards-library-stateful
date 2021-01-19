import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value,
    });
  }

  renderSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          name="subtitle"
        />
      </label>
    );
  }

  renderImage(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          name="imagePath"
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChange }
            name="title"
          />
        </label>
        { this.renderSubtitle(subtitle) }
        { this.renderImage(imagePath) }
      </form>
    );
  }
}

export default AddMovie;
