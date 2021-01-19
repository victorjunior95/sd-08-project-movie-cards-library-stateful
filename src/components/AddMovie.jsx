import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      inputTextTitle: '',
      inputTextSubTitle: '',
      inputUrl: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderInputTitle() {
    const { inputTextTitle } = this.state;
    return (
      <input
        name="inputTextTitle"
        type="text"
        data-testid="title-input"
        id="title-input"
        value={ inputTextTitle }
        onChange={ this.handleChange }
      />
    );
  }

  renderInputSubTitle() {
    const { inputTextSubTitle } = this.state;
    return (
      <input
        name="inputTextSubTitle"
        type="text"
        data-testid="subtitle-input"
        id="subtitle-input"
        value={ inputTextSubTitle }
        onChange={ this.handleChange }
      />
    );
  }

  renderInputImagePath() {
    const { inputUrl } = this.state;
    return (
      <input
        name="inputUrl"
        type="text"
        data-testid="image-input"
        id="image-input"
        value={ inputUrl }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          { this.renderInputTitle() }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          { this.renderInputSubTitle() }
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          { this.renderInputImagePath() }
        </label>
      </form>
    );
  }
}

export default AddMovie;
