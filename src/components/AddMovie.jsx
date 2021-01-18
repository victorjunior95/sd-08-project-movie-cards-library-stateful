import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value
    })
  }

  resetStates = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    })
  }

  render() {
    const { onClick } = this.props;
    
    return (
      <form>
        <label data-testid="title-input-label">Título
          <input
            name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="subtitle-input-label">Subtítulo
          <input
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="image-input-label">Imagem
          <input
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="storyline-input-label">Sinopse
          <textarea
            name="storyline"
            value={this.state.storyline}
            data-testid="image-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="rating-input-label">Avaliação
          <input
            name="rating"
            type="number"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="genre-input-label">Gênero
          <select
            name="genre"
            type="number"
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleChange}
          >
            <option value="action" data-testid="genre-option" selected>Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={onClick} onBlur={this.resetStates}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
