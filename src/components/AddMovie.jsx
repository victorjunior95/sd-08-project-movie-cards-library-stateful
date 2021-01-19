// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" action="">
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default AddMovie;
