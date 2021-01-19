// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderInputFieldTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderInputFieldSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderInputFieldPath() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderInputFieldTitle()}
        {this.renderInputFieldSubtitle()}
        {this.renderInputFieldPath()}
      </form>);
  }
}

export default AddMovie;
// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
