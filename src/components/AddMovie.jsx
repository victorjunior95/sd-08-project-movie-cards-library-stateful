// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // subtittle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleTitleInput = this.handleTitleInput.bind(this);
  }

  handleTitleInput(event) {
    const { title } = this.state;
    this.setState({ title: event.target.value });
    console.log(title);
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

  render() {
    const { title } = this.state;
    const { handleTitleInput } = this;
    return (
      <form action="" data-testid="add-movie-form">
        {this.titleInputLabel(title, handleTitleInput)}
      </form>
    );
  }
}

export default AddMovie;
