import React, { Component } from 'react';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';
import TextInputSubtitle from './TextInputSubtitle';
import TextInputTitle from './TextInputTitle';

export default class AddMovie extends Component {
  render() {
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    return (
      <form data-testid="add-movie-form">
        <TextInputTitle />
        <TextInputSubtitle />
        <InputImage />
        <InputTextArea />
        <InputRating />
        <InputSelect />
      </form>
    );
  }
}
