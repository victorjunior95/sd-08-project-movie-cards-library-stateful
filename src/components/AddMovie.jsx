import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
  }

  inputText = (callback) => {
    return (
      <label data-testid="title-input-label">
      Título
      <input
        type="text"
        name="title"
        value={ this.state.title }
        onChange={ callback }
        data-testid="title-input"
      />
    </label>
    )
  }

  inputSubtitle = (callback) => {
    return (
      <label data-testid="subtitle-input-label">
      Subtítulo
      <input
        type="text"
        name="subtitle"
        value={ this.state.subtitle }
        onChange={ callback }
        data-testid="subtitle-input"
      />
    </label>
    )
  }

  inputImage = (callback) => {
    return (
      <label data-testid="image-input-label">
        Imagem
        <input
        type="text"
        name="imagePath"
        value={ this.state.imagePath }
        onChange={ callback }
        data-testid="image-input" />
      </label>
    )
  }

  inputTextArea = (callback) => {
    return (
      <label data-testid="storyline-input-label">
        Sinopse
        <textarea
        type="text"
        name="storyline"
        value= { this.state.storyline }
        onChange= { callback }
        data-testid="storyline-input"
        />
      </label>
    )
  }

  inputNumber = (callback) => {
    return (
      <label data-testid="rating-input-label">
        Avaliação
        <input
        type="number"
        name="rating"
        value={ this.state.rating }
        onChange={ callback }
        data-testid="rating-input"
        />
      </label>
    )
  }

  selectForm = (callback) => {
    return (
      <label data-testid="genre-input-label">
        Gênero
        <select name="genre" value={ this.state.genre } data-testid="genre-input" onChange={ callback }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    )
  }

  buttonForm = (callback) => {
    const newMovie = {
      genre: this.state.genre,
      imagePath: this.state.imagePath,
      rating: this.state.rating,
      storyline: this.state.storyline,
      subtitle: this.state.subtitle,
      title: this.state.title,
    }
    return (
      <button data-testid="send-button">Adicionar filme</button>
    )
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.inputText(this.handleChange) }
        { this.inputSubtitle(this.handleChange) }
        { this.inputImage(this.handleChange) }
        { this.inputTextArea(this.handleChange) }
        { this.inputNumber(this.handleChange) }
        { this.selectForm(this.handleChange) }
        { this.buttonForm() }
      </form>
    );
  }
}

export default AddMovie;
