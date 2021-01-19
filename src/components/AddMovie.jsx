import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value,
    });
  }

  renderSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          name="subtitle"
        />
      </label>
    );
  }

  render() {
    const { title, subtitle } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChange }
            name="title"
          />
        </label>
        { this.renderSubtitle(subtitle) }
        ;
      </form>
    );
  }
}

export default AddMovie;
