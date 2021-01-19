import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      inputTextValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputTextValue: event.target.value });
  }

  renderInput() {
    const { inputTextValue } = this.state;
    return (
      <input
        type="text"
        data-testid="title-input"
        id="title-input"
        value={ inputTextValue }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          { this.renderInput() }
        </label>
      </form>
    );
  }
}

export default AddMovie;
