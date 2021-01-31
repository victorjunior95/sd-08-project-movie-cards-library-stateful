import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { genre, rating, storyline, imagePath, title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form" />
    );
  }
}
