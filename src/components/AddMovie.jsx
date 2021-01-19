import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      titleText: '',
      subtitleText: '',
      image: '',
    };
    this.updateTitleText = this.updateTitleText.bind(this);
  }

  createTitle() {
    const { titleText } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="titleText">
        Título
        <input
          type="text"
          title={ titleText }
          data-testid="title-input"
          onChange={ this.updateTitleText }
          id="titleText"
        />
      </label>
    );
  }

  createSubtitle() {
    const { subtitleText } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleText">
        Subtítulo
        <input
          type="text"
          subtitle={ subtitleText }
          data-testid="subtitle-input"
          onChange={ this.updateTitleText }
          id="subtitleText"
        />
      </label>
    );
  }

  createImage() {
    const { image } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          type="text"
          imagePath={ image }
          data-testid="image-input"
          onChange={ this.updateTitleText }
          id="image"
        />
      </label>
    );
  }

  updateTitleText(event) {
    const text = event.target.value;
    const keyName = event.target.id;
    this.setState({
      [keyName]: text,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.createTitle() }
        { this.createSubtitle() }
        { this.createImage() }
      </form>
    );
  }
}

export default AddMovie;
