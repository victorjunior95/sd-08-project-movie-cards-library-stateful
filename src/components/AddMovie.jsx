import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="add-movie-form" action="">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input data-testid="title-input" id="title" type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
