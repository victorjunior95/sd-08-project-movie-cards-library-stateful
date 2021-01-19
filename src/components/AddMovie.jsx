import React from 'react';

class AddMovie extends React.Component {
  inputTitle() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input data-testid="title-input" id="title" type="text" />
      </label>
    );
  }

  inputSubtitle() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input data-testid="subtitle-input" id="subtitle" type="text" />
      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" action="">
          {this.inputTitle()}
          {this.inputSubtitle()}
        </form>
      </div>
    );
  }
}

export default AddMovie;
