import React from 'react';

import TitleAddMovie from './TitleAddMovie';
import SubtitleAddMovie from './SubtitleAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
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
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleAddMovie value={ title } handleChange={ this.handleChange } />
        <SubtitleAddMovie value={ subtitle } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
