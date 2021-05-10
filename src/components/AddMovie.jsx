import React from 'react';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } handleChange={ this.handleChange } />
        <InputSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <InputImage imagePath={ imagePath } handleChange={ this.handleChange } />
        <InputStoryline storyline={ storyline } handleChange={ this.handleChange } />
        <InputRating rating={ rating } handleChange={ this.handleChange } />
        <InputGenre genre={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
