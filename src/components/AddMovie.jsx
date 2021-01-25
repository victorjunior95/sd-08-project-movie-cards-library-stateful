// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class AddMovie extends React.Component {
  render() {
    const def = {
      title: '', subtitle: '', storyline: '', rating: '', imagePath: '' };
    return (
      <form action="">
        <div data-testid="movie-card">
          <img alt="Movie Cover" className="movie-card-image" src={ def.imagePath } />
          <div className="movie-card-body">
            <h4 data-testid="movie-card-title" className="movie-card-title">{def.title}</h4>
            <h5 className="movie-card-subtitle">{def.subtitle}</h5>
            <p className="movie-card-storyline">{def.storyline}</p>
          </div>
          <h1>{ def.rating }</h1>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default AddMovie;
