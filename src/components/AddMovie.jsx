import React from 'react';

import TitleAddMovie from './AddMovie/TitleAddMovie';
import SubtitleAddMovie from './AddMovie/SubtitleAddMovie';
import ImageAddMovie from './AddMovie/ImageAddMovie';
import TextAreaAddMovie from './AddMovie/TextAreaAddMovie';
import RatingAddMovie from './AddMovie/RatingAddMovie';
import SelectAddMovie from './AddMovie/SelectAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
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
        <TitleAddMovie value={ title } handleChange={ this.handleChange } />
        <SubtitleAddMovie value={ subtitle } handleChange={ this.handleChange } />
        <ImageAddMovie value={ imagePath } handleChange={ this.handleChange } />
        <TextAreaAddMovie value={ storyline } handleChange={ this.handleChange } />
        <RatingAddMovie value={ rating } handleChange={ this.handleChange } />
        <SelectAddMovie value={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
