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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleClick(addMovie) {
    addMovie(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
/* eslint-disable */
  render() {

    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input id="title" type="text" value={ title } onChange={this.handleChange} data-testid="title-input" />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input id="subtitle" type="text" value={ subtitle } onChange={this.handleChange} data-testid="subtitle-input" />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input id="imagePath" type="text" value={ imagePath } onChange={this.handleChange} data-testid="image-input" />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea id="storyline" value={ storyline } onChange={this.handleChange} data-testid="storyline-input" />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input id="rating" type="number" value={ rating } onChange={this.handleChange} data-testid="rating-input" />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select id="genre" value={ genre } onChange={ this.handleChange } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button onClick={ (event) => { event.preventDefault(); this.handleClick(onClick); } } data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}
/* eslint-enable */
export default AddMovie;
