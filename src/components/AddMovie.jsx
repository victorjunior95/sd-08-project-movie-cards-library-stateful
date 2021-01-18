import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input id="title-input" data-testid="title-input" onChange={ title } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
