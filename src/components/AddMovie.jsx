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

  render() {
    const { title } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title-input"
            id="title-input"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleTitleInput }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
