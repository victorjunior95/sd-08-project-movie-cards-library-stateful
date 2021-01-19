// implement AddMovie component here
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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  renderTitle() {
    const { title } = this.state;

    return (
      <label data-testid="title-input-label" htmlFor="titleInput">
        Título
        <input
          id="titleInput"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
