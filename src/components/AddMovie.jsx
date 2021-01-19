// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChangeInput(event) {
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
          onChange={ this.handleChangeInput }
          data-testid="title-input"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderInputFieldTitle()}
      </form>);
  }
}

export default AddMovie;
// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
