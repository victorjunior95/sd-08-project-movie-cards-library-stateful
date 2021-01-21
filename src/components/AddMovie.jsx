// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateInputField from './CreateInputField';
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

  handleForm() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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

  createTextArea() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          text="Sinopse"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.updateStates }
        />
      </label>
    );
  }

  textInputs() {
    const { title, subtitle, imagePath, rating } = this.state;
    // Button type, Button name/id/htmlFor, Label dataTestid, Inner text, inPutDataTestid, inputValue
    const inputs = [
      { type: 'text', name: 'title', testLabel: 'title', text: 'Título', testInput: 'title', value: title },
      { type: 'text', name: 'subtitle', testLabel: 'subtitle', text: 'Subtítulo', testInput: 'subtitle', value: subtitle },
      { type: 'text', name: 'imagePath', testLabel: 'image', text: 'Imagem', testInput: 'image', value: imagePath },
      { type: 'number', name: 'rating', testLabel: 'rating', text: 'Avaliação', testInput: 'rating', value: rating }];
    return inputs;
  }

  createAllTextInput() {
    const inputs = this.textInputs();
    const allInputs = inputs.map((e) => (<CreateInputField
      key={ e.text }
      type={ e.type }
      name={ e.name }
      dataTestid={ `${e.testLabel}-input-label` }
      text={ e.text }
      inPutDataTestid={ `${e.testInput}-input` }
      inputValue={ e.value }
      callBack={ this.updateStates }
    />));
    return allInputs;
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.createAllTextInput()}
        {this.createTextArea()}
        {this.genderSelector()}
        <CreateButton dataTestid="send-button" onClick={ this.handleForm } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: PropTypes.func,
};

export default AddMovie;
