import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  title() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          onChange={ this.handleChange }
          id="title"
        />
      </label>
    );
  }

  subtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          id="subtitle"
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.title()}
        {this.subtitle()}
      </form>
    );
  }
}

export default AddMovie;
