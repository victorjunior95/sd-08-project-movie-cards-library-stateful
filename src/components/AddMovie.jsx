import React from 'react';

import TitleAddMovie from './AddMovie/TitleAddMovie';
import SubtitleAddMovie from './AddMovie/SubtitleAddMovie';
import ImageAddMovie from './AddMovie/ImageAddMovie';
import TextAreaAddMovie from './AddMovie/TextAreaAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
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
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleAddMovie value={ title } handleChange={ this.handleChange } />
        <SubtitleAddMovie value={ subtitle } handleChange={ this.handleChange } />
        <ImageAddMovie value={ imagePath } handleChange={ this.handleChange } />
        <TextAreaAddMovie value={ storyline } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
