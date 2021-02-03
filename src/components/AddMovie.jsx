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
    this.changeState = this.changeState.bind(this);
    this.otherOnClick = this.otherOnClick.bind(this);
  }

  otherOnClick() {
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick();
  }

  changeState(newState) {
    this.setState(newState);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle title={ title } changeState={ this.changeState } />
        <AddMovieSubtitle subtitle={ subtitle } changeState={ this.changeState } />
        <AddMovieImage imagePath={ imagePath } changeState={ this.changeState } />
        <AddMoviePlot storyline={ storyline } changeState={ this.changeState } />
        <AddMovieRating rating={ rating } changeState={ this.changeState } />
        <AddMovieGenre genre={ genre } changeState={ this.changeState } />
        <AddMovieSubmit
          onClick={ () => {
            this.otherOnClick();
          } }
        />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
