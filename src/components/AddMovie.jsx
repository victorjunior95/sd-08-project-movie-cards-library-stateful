import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import SelectGenre from './SelectGenre';
import StoryLine from './StoryLine';

const optionList = [
  {
    name: 'Ação',
    value: 'action',
  },
  {
    name: 'Comédia',
    value: 'comedy',
  },
  {
    name: 'Suspense',
    value: 'thriller',
  },
];

const DEF_SELECT_GENRE_PROPS = {
  labelName: 'Gênero',
  testid1: 'genre-input-label',
  testid2: 'genre-input',
  testid3: 'genre-option',
};

// Return 20 Linhas
// /* eslint-disable */

// function AddMovie() {
//   return (
//     <form data-testid="add-movie-form">
//       <Input type="text" name="title" testid="title-input" labelName="Título" />
//       <Input type="text" name="subtitle" testid="subtitle-input" labelName="Subtítulo" />
//       <Input type="text" name="imagePath" testid="image-input" labelName="Imagem" />
//       <StoryLine />
//       <Input type="number" name="rating" testid="rating-input" labelName="Avaliação" />
//       <SelectGenre { ...DEF_SELECTGENRE_PROPS } optionList={ optionList } />
//       <button type="submit" onClick={ handleClick } data-testid="send-button">
//         Adicionar filme
//       </button>
//     </form>
//   );
// }

// this.state = {
//   title: '',
//   subtitle: '',
//   imagePath: '',
//   rating: '',
//   storyline: '',
//   name: '',
// };
class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // e.preventDefault();
    // console.log(e.target);
    // this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.name);
  }

  InputTitle() {
    return (
      <>
        <Input type="text" name="title" labelName="Título" onChange={ this.handleChange } />
        <br />
      </>
    );
  }

  InputSubtitle() {
    return (
      <>
        <Input
          type="text"
          name="subtitle"
          labelName="Subtítulo"
          onChange={ this.handleChange }
        />
        <br />
      </>
    );
  }

  InputRating() {
    return (
      <>
        <Input
          type="number"
          name="rating"
          labelName="Avaliação"
          onChange={ this.handleChange }
        />
        <br />
      </>
    );
  }

  InputStoryLine() {
    return (
      <>
        <StoryLine onChange={ this.handleChange } />
        <br />
      </>
    );
  }

  InputGenre() {
    return (
      <>
        <SelectGenre
          { ...DEF_SELECT_GENRE_PROPS }
          optionList={ optionList }
          onChange={ this.handleChange }
        />
        <br />
      </>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.InputTitle()}
        {this.InputSubtitle()}
        {this.InputStoryLine()}
        {this.InputRating()}
        {this.InputGenre()}
        <button type="button" data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
