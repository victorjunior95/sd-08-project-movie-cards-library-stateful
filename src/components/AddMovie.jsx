import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this)

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    // const { subtitle, title, imagePath, storyline,
    //   rating, genre } = this.state;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ (e) => this.setState({ title: e.target.value }) }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
