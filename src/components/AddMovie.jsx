import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target.value;
    this.setState({
      [name]: value,
    });
  }

  title(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ title }
          name="title"
          data-testeid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitle(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          name="subtitle"
          data-testeid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        { this.title(title) }
        { this.subtitle(subtitle) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
