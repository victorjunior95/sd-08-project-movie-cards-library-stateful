// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.handleState = this.handleState.bind(this);
  }

  handleState(event) {
    const { value, name } = event.target;
    this.setState(() => ({ [name]: value,
    }));
  }

  insertInput(refState, handleState, testeID, name) {
    return (
      <label htmlFor="inputInsert" data-testid="title-input-label">
        Título
        <input
          onChange={ handleState }
          value={ refState }
          name={ name }
          id="inputInsert"
          data-testid={ testeID }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <button type="button" onClick={ onClick }>eu aqui</button>
        {this.insertInput(title, this.handleState, 'title-input', 'title')}
        {this.insertInput(subtitle, this.handleState, 'title-input', 'subtitle')}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
