// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleSubtitleInput = this.handleSubtitleInput.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
  }

  handleTitleInput(event) {
    const { title } = this.state;
    this.setState({ title: event.target.value });
    console.log(title);
  }

  handleSubtitleInput(event) {
    const { subtitle } = this.state;
    this.setState({ subtitle: event.target.value });
    console.log(subtitle);
  }

  handleImageInput(event) {
    const { imagePath } = this.state;
    this.setState({ imagePath: event.target.value });
    console.log(imagePath);
  }

  titleInputLabel(title, handleTitleInput) {
    return (
      <label htmlFor="input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title-input"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ handleTitleInput }
        />
      </label>
    );
  }

  subtitleInputLabel(subtitle, handleSubtitleInput) {
    return (
      <label htmlFor="input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle-input"
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleSubtitleInput }
        />
      </label>
    );
  }

  imageInputLabel(imagePath, handleImageInput) {
    return (
      <label htmlFor="input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="image-input"
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleImageInput }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    const { handleTitleInput, handleSubtitleInput, handleImageInput } = this;
    return (
      <form action="" data-testid="add-movie-form">
        {this.titleInputLabel(title, handleTitleInput)}
        {this.subtitleInputLabel(subtitle, handleSubtitleInput)}
        {this.imageInputLabel(imagePath, handleImageInput)}
      </form>
    );
  }
}

export default AddMovie;
