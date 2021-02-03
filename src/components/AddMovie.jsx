// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import AddMovieGenre from './AddMovieGenre';
import AddMovieImage from './AddMovieImage';
import AddMoviePlot from './AddMoviePlot';
import AddMovieRating from './AddMovieRating';
import AddMovieSubmit from './AddMovieSubmit';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieTitle from './AddMovieTitle';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.onClick = this.onClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  onClick() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle changeState={ this.changeState } />
        <AddMovieSubtitle changeState={ this.changeState } />
        <AddMovieImage changeState={ this.changeState } />
        <AddMoviePlot changeState={ this.changeState } />
        <AddMovieRating changeState={ this.changeState } />
        <AddMovieGenre changeState={ this.changeState } />
      </form>
    );
  }
}

export default AddMovie;
