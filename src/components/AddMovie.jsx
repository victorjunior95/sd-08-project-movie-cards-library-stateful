// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateTextInput from './CreateTextInput';
import GenderSelector from './GenderSelector';
import CreateButton from './CreateButton';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.updateStates = this.updateStates.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e) {
    e.preventDefault();
    const { addMovie } = this.props;
    addMovie(this.state);
    console.log(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }, () => {
      console.log(this.state);
    });
  }

  updateStates(e) {
    if (e.target.name === 'rating') {
      return this.setState({ [e.target.name]: Number(e.target.value) });
    }
    return this.setState({ [e.target.name]: e.target.value });
  }

  genderSelector() {
    const { genre } = this.state;
    return (
      <GenderSelector
        text="Gênero"
        name="genre"
        dataTestid="genre-input-label"
        dataTestid2="genre-input"
        dataTestid3="genre-option"
        initialState={ genre }
        callBack={ this.updateStates }
        blankOption={ false }
      />
    );
  }

  t([...params]) {
    const lbl = '-input-label';
    const input = '-input';
    return (
      <CreateTextInput
        type={ params[0] }
        name={ params[1] }
        dataTestid={ params[2] + lbl }
        text={ params[3] }
        inPutDataTestid={ params[4] + input }
        inputValue={ params[5] }
        callBack={ this.updateStates }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    const stry = 'storyline';
    return (
      <form data-testid="add-movie-form">
        {this.t(['text', 'title', 'title', 'Título', 'title', title])}
        {this.t(['text', 'subtitle', 'subtitle', 'Subtítulo', 'subtitle', subtitle])}
        {this.t(['text', 'imagePath', 'image', 'Imagem', 'image', imagePath])}
        {this.t(['textarea', stry, stry, 'Sinopse', stry, storyline])}
        {this.t(['number', 'rating', 'rating', 'Avaliação', 'rating', rating])}
        {this.genderSelector()}
        <CreateButton dataTestid="send-button" onClick={ this.handleForm } />
      </form>
    );
  }
}
// <button type="button" data-testid="send-button" onClick={ this.handleForm }>Adicionar filme</button>
// <CreateTextInput type="text" name="title" dataTestid="title-input-label" text="Título" inPutDataTestid="title-input" inputValue={ title } callBack={ this.updateStates } />
// <CreateTextInput type="text" name="subtitle" dataTestid="subtitle-input-label" text="Subtítulo" inPutDataTestid="subtitle-input" inputValue={ subtitle } callBack={ this.updateStates } />
// <CreateTextInput type="text" name="imagePath" dataTestid="image-input-label" text="Imagem" inPutDataTestid="image-input" inputValue={ imagePath } callBack={ this.updateStates } />
// <CreateTextInput type="textarea" name="storyline" dataTestid="storyline-input-label" text="Sinopse" inPutDataTestid="storyline-input" inputValue={ storyline } callBack={ this.updateStates } />
// <CreateTextInput type="number" name="rating" dataTestid="rating-input-label" text="Avaliação" inPutDataTestid="rating-input" inputValue={ rating } callBack={ this.updateStates } />
// <GenderSelector text="Gênero" name="genre" dataTestid="genre-input-label" dataTestid2="genre-input" dataTestid3="select-option" initialState={ genre } callBack={ this.updateStates } blankOption={ false } />

AddMovie.propTypes = {
  addMovie: PropTypes.func,
};

AddMovie.defaultProps = {
  addMovie: PropTypes.func,
};

export default AddMovie;
