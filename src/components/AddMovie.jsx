import React from 'react';
import PropTypes from 'prop-types';
class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}
Rating.propTypes = { rating: PropTypes.number.isRequired };
export default Rating;
19h21
import React from 'react';
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }
  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            value={ title }
            data-testid="title-input"
            onChange={ (e) => this.setState({ title: e.target.value }) }
          />
        </label>
      </form>
    );
  }
}
export default AddMovie;
