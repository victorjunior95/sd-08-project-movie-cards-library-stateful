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

const DEF_SELECTGENRE_PROPS = {
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

class AddMovie extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     title: '',
  //     subtitle: '',
  //     imagePath: '',
  //     rating: '',
  //     storyline: '',
  //     name: '',
  //   };
  //   // this.handleChange = this.handleClick.bind(this);
  // }

  // handleChange(e) {
  //   // e.preventDefault();
  //   // console.log(e.target);
  //   // this.setState({ [e.target.name]: e.target.value })
  //   console.log(e.target.name);
  // }

  render() {
    return (
      <form data-testid="add-movie-form">
        <Input type="text" name="title" labelName="Título" />
        <Input type="text" name="subtitle" labelName="Subtítulo" />
        <Input type="text" name="imagePath" labelName="Imagem" />
        <StoryLine />
        <Input type="number" name="rating" labelName="Avaliação" />
        <SelectGenre { ...DEF_SELECTGENRE_PROPS } optionList={ optionList } />
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
