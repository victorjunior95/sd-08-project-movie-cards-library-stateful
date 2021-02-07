import React, { Component } from 'react';
import Button from './Button';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';
import TextInputSubtitle from './TextInputSubtitle';
import TextInputTitle from './TextInputTitle';

export default class RenderAll extends Component {
  render() {
    return (
      <div>
        <TextInputTitle />
        <TextInputSubtitle />
        <InputImage />
        <InputTextArea />
        <InputRating />
        <InputSelect />
        <Button />
      </div>
    );
  }
}
