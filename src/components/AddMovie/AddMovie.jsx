import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Rating from './Rating';
import Genre from './Genre';
import Button from './Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      inputTextTitle: '',
      inputTextSubTitle: '',
      inputUrl: '',
      inputTextStoryline: '',
      rating: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputTextTitle: '',
      inputTextSubTitle: '',
      inputUrl: '',
      inputTextStoryline: '',
      rating: 0,
    }).submit();
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
        <ImagePath />
        <Storyline />
        <Rating />
        <Genre />
        <Button />
      </form>
    );
  }
}

export default AddMovie;
