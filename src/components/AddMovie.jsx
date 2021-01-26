import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputTitle(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputSubtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  // inputSubtitle(subtitle) {
  //   return (
  //     <label data-testid="title-input-label" htmlFor="title-input">
  //       Título
  //       <input
  //         data-testid="title-input"
  //         type="text"
  //         value={ title }
  //         onChange={ this.handleChange }
  //       />
  //     </label>
  //   );
  // }


  render() {
    const { subtitle, title, imagePath, storyline,
      rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.inputTitle(title)}
        {this.inputSubtitle(subtitle)}
        {/* {this.inputTitle(imagePath)}
        {this.inputTitle(storyline)}
        {this.inputTitle(rating)}
        {this.inputTitle(genre)} */}
      </form>
    );
  }
}

export default AddMovie;
