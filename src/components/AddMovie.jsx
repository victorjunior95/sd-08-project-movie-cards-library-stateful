import React from 'react';
import Title from './AddMovie/Title';
import Subtitle from './AddMovie/Subtitle';
import ImagePath from './AddMovie/ImagePath';
import Storyline from './AddMovie/Storyline';
import Rating from './AddMovie/Rating';
import Genre from './AddMovie/Genre';
import Button from './AddMovie/Button';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      inputUrl: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      inputUrl: '',
      storyline: '',
      rating: 0,
    }).submit();
  }

  render() {
    const {
      title, subtitle, storyline, rating, inputUrl, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title handleChange={ this.handleChange } title={ title } />
        <Subtitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <ImagePath handleChange={ this.handleChange } inputUrl={ inputUrl } />
        <Storyline handleChange={ this.handleChange } storyline={ storyline } />
        <Rating handleChange={ this.handleChange } rating={ rating } />
        <Genre handleChange={ this.handleChange } genre={ genre } />
        <Button />
      </form>
    );
  }
}

export default AddMovie;
