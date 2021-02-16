import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';
import TextInputSubtitle from './TextInputSubtitle';
import TextInputTitle from './TextInputTitle';

export default class RenderAll extends Component {
  render() {
    const { func, funcGenre, title, sub, image, storyline, rating, genre } = this.props;
    return (
      <div>
        <TextInputTitle func={ func } title={ title } />
        <TextInputSubtitle func={ func } subtitle={ sub } />
        <InputImage func={ func } imagePath={ image } />
        <InputTextArea func={ func } storyline={ storyline } />
        <InputRating func={ func } rating={ rating } />
        <InputSelect func={ funcGenre } genre={ genre } />
      </div>
    );
  }
}

RenderAll.propTypes = {
  func: PropTypes.func,
  funcGenre: PropTypes.func,
  title: PropTypes.string,
  sub: PropTypes.string,
  image: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}.isRequired;