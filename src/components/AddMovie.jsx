// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import AddTituloMovie from './AddTituloMovie';
import AddSubtituloMovie from './AddSubtituloMovie';
import AddImageMovie from './AddImageMovie';
import AddSinopseMovie from './AddSinopseMovie';
import AddAvaliacaoMovie from './AddAvaliacaoMovie';
import AddGeneroMovie from './AddGeneroMovie';
import ButtonAddMovie from './ButtonAddMovie';

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

    this.updateTitle = this.updateTitle.bind(this);
    this.updateSubtitule = this.updateSubtitule.bind(this);
    this.updateImgPath = this.updateImgPath.bind(this);
    this.updateStore = this.updateStore.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  updateSubtitule(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  updateImgPath(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  updateStore(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  updateRating(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  updateGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  render() {
    const {
      onClick,
    } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTituloMovie title={ title } updateTitle={ this.updateTitle } />
        <AddSubtituloMovie subtitle={ subtitle } update={ this.updateSubtitule } />
        <AddImageMovie imgPath={ imagePath } changeImg={ this.updateImgPath } />
        <AddSinopseMovie story={ storyline } updateStore={ this.updateStore } />
        <AddAvaliacaoMovie rating={ rating } updateRating={ this.updateRating } />
        <AddGeneroMovie genre={ genre } updateGenre={ this.updateGenre } />
        <ButtonAddMovie teste={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
