import React from 'react';
import PropTypes from 'prop-types';

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
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  textInput(name, label) {
    const value = this.state;
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        {label}
        <input
          type="text"
          value={ value[name] || value[`${name}Path`] }
          id={ `${name}-input` }
          data-testid={ `${name}-input` }
          name={ name }
          onChange={ this.onChange }
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.textInput('title', 'Título')}
        {this.textInput('subtitle', 'Subtítulo')}
        {this.textInput('image', 'Imagem')}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
