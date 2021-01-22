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

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          id="title-input"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="imagePath"
          id="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  renderTextarea() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="image-input">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImage() }
        { this.renderTextarea() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
