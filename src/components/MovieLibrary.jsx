// implement MovieLibrary component here
import React from 'react';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

export default MovieLibrary;
