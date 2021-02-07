import React, { Component } from 'react';
import RenderAll from './RenderAll';

export default class AddMovie extends Component {
  render() {
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    return (
      <form data-testid="add-movie-form">
        <RenderAll />
      </form>
    );
  }
}
