import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  handleChange(target) {
    return (
      this.setState({ [target.name]: target.value })
    );
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <label
        htmlFor="title-input"
        data-testid="title-input-label"
      >
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label
        htmlFor="title-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
      </form>
    );
  }
}

export default AddMovie;
