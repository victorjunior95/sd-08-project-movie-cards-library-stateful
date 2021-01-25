import React from 'react';

import InputTitle from './addMovieComponents/InputTitle';
import InputSubtitle from './addMovieComponents/InputSubtitle';
import InputImage from './addMovieComponents/InputImage';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
