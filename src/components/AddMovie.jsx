import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  titleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ (e) => this.setState({ title: e.target.value }) }
        />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.titleInput()}
        <label>
          <input type="text" />
        </label>

        <label>
          <input type="text" />
        </label>

        <label>
          <input type="textarea" />
        </label>

        <label>
          <input type="number" />
        </label>

        <label>
          <select>Gender</select>
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default AddMovie;
