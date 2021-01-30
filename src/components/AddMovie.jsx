// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import AddTituloMovie from './AddMovie/AddTituloMovie';
import AddSubtituloMovie from './AddMovie/AddSubtituloMovie';
import AddImageMovie from './AddMovie/AddImageMovie';
import AddSinopseMovie from './AddMovie/AddSinopseMovie';
import AddAvaliacaoMovie from './AddMovie/AddAvaliacaoMovie';
import AddGeneroMovie from './AddMovie/AddGeneroMovie';
import ButtonAddMovie from './AddMovie/ButtonAddMovie';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleReset(event) {
    event.preventDefault();

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });

    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTituloMovie value={ title } handleChange={ this.handleChange } />
        <AddSubtituloMovie value={ subtitle } handleChange={ this.handleChange } />
        <AddImageMovie value={ imagePath } handleChange={ this.handleChange } />
        <AddSinopseMovie value={ storyline } handleChange={ this.handleChange } />
        <AddAvaliacaoMovie value={ rating } handleChange={ this.handleChange } />
        <AddGeneroMovie value={ genre } handleChange={ this.handleChange } />
        <ButtonAddMovie handleReset={ this.handleReset } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
