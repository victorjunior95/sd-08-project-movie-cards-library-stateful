// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleSubtitleInput = this.handleSubtitleInput.bind(this);
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

  render() {
    const { title, subtitle } = this.state;
    const { handleTitleInput, handleSubtitleInput } = this;
    return (
      <form action="" data-testid="add-movie-form">
        {this.titleInputLabel(title, handleTitleInput)}
        {this.subtitleInputLabel(subtitle, handleSubtitleInput)}
      </form>
    );
  }
}

export default AddMovie;
