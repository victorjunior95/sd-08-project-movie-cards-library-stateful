// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input type="text" name="title" id="title-input" value={ title } onChange={ this.handleChange } data-testid="title-input" />
          </label>
        </div>

        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" name="subtitle" id="subtitle-input" value={ subtitle } onChange={ this.handleChange } data-testid="subtitle-input" />
          </label>
        </div>
        <div>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input name="imagePath" type="text" value={ imagePath } alt={ subtitle } data-testid="image-input" onChange={ this.handleChange } />
          </label>
        </div>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
