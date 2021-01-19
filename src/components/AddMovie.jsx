// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // subtittle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  InputSubtitleLabel() {
    return (
      <label htmlFor="input">
        <input type="text" name="" id="input" />
      </label>
    );
  }

  render() {
    return (
      <form action="">
        {this.InputSubtitleLabel}
      </form>
    );
  }
}

export default AddMovie;
