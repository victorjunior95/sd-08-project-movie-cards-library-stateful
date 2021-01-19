import React from "react";

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "",
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor='title-input'>
          Título
          <input
            data-testid="title-input"
            onChange={ (e) => this.setState({ title: e.target.value }) }
            value={ title }
          />
        </label>
      </form>
    );
  }
}
