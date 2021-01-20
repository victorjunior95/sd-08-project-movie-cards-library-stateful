import React from 'react';
import PropTypes from 'prop-types';

import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';
import AddImage from './AddImage';
import AddStoryline from './AddStoryline';
import AddRating from './AddRating';
import AddGenre from './AddGenre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  resetStates() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  submitChange(event) {
    event.preventDefault();
    this.props.onClick(this.state);
    this.resetStates();
  }

  render() {
    return (
      <form>
        <AddTitle value={ this.state.title } handleChange={ this.handleChange } />
        <AddSubtitle value={ this.state.subtitle } handleChange={ this.handleChange } />
        <AddImage value={ this.state.imagePath } handleChange={ this.handleChange } />
        <AddStoryline value={ this.state.storyline } handleChange={ this.handleChange } />
        <AddRating value={ this.state.rating } handleChange={ this.handleChange } />
        <AddGenre value={ this.state.genre } handleChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.submitChange }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
