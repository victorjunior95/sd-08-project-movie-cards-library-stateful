import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {

    };

    this.movieNameInput = this.movieNameInput.bind(this);
    this.subtitleInput = this.subtitleInput.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  //   handleChange(event) {
  //       this.setState({title: event.target.title});
  //   }

  movieNameInput(callback) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputMovieName">
        Título:
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ callback }
          id="title-input"
        />
      </label>
    );
  }

  subtitleInput(callback) {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
        Subtitle:
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ callback }
          id="subtitle-input"
        />
      </label>
    );
  }

  render() {
    return (
      <label htmlFor="inputMovie">
        <form data-testid="add-movie-form">
          { this.movieNameInput(this) }
          { this.subtitleInput(this) }
          {/* { this.movieNameInput(this.handleChange) } */}
        </form>
      </label>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
