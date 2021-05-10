import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  titleInput() {
    const { title } = this.state;
    return (
      <label
        htmlFor="title-input"
        data-testid="title-input-label"
      >
        Título
        <input
          data-testid="title-input"
          onChange={ this.handleChange }
          type="text"
          value={ title }
          id="title-input"
          name="title"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.titleInput() }
      </form>
    );
  }
}

export default AddMovie;
