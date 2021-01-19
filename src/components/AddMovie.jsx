import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            value={ title }
            data-testid="title-input"
            onChange={ (e) => this.setState({ title: e.target.value }) }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
