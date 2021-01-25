import React from 'react';

import InputAddMovie from './addMovieComponents/InputAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputAddMovie value={ title } onChange={ this.handleChange }/>
      </form>
    );
  }
}

export default AddMovie;
