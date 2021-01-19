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

  renderInputTextTitle() {
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

  renderInputTextSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="movie-title"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderInputTextImage() {
    const { imagemPath } = this.state;
    return (
      <label htmlFor="movie-image" data-testid="image-input-label">
        <input
          name="imagemPath"
          id="movie-image"
          value={ imagemPath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.renderInputTextTitle() }
        { this.renderInputTextSubtitle() }
        { this.renderInputTextImage() }
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default AddMovie;
