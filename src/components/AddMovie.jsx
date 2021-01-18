import React from 'react';

import TitleAddMovie from './TitleAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
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
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleAddMovie value={ title } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
