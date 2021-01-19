import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagemPath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderInputTextAddMovie = this.renderInputTextAddMovie.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderInputTextAddMovie() {
    const { title } = this.state;
    return (
      <label htmlFor="movie-title" data-testid="title-input-label">
        Título
        <input
          id="movie-title"
          value={ title }
          data-testid="title-input"
          name="title"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    // const { subtitle, title, imagemPath, storyline, rating, genre} = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.renderInputTextAddMovie() }
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default AddMovie;
