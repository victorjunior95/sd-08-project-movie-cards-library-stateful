import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubtitleMovie from './SubtitleMovie';
import TitleMovie from './TitleMovie';
import ImageMovie from './ImageMovie';
import StorylineMovie from './StorylineMovie';
import RatingMovie from './RatingMovie';
import SelectGenreMovie from './SelectGenreMovie';
import ButtonSubmitMovie from './ButtonSubmitMovie';

class AddMovie extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(event);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <SubtitleMovie value={ subtitle } handleChange={ this.handleChange } />
        <TitleMovie value={ title } handleChange={ this.handleChange } />
        <ImageMovie value={ imagePath } handleChange={ this.handleChange } />
        <StorylineMovie value={ storyline } handleChange={ this.handleChange } />
        <RatingMovie value={ rating } handleChange={ this.handleChange } />
        <SelectGenreMovie value={ genre } handleChange={ this.handleChange } />
        <ButtonSubmitMovie handleChange={ this.handleSubmit } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
