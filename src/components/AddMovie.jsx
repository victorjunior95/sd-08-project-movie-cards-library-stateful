import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };

    this.movieNameInput = this.movieNameInput.bind(this);
    this.subtitleInput = this.subtitleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  movieNameInput(callback) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputMovieName">
        Título:
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ callback }
          id="title-input"
        />
      </label>
    );
  }

  subtitleInput(callback) {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
        Subtitle:
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ callback }
          id="subtitle-input"
        />
      </label>
    );
  }

  //   imageInput(callback) {

  //   }

  render() {
    return (
      <label htmlFor="inputMovie">
        <form data-testid="add-movie-form">
          { this.movieNameInput(this.handleChange) }
          { this.subtitleInput(this.handleChange) }
        </form>
      </label>
    );
  }
}

export default AddMovie;
