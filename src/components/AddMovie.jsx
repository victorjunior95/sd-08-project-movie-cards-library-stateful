import { render } from 'enzyme'
import React from 'react'

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props

    return (
      <form>
        <label data-testid="title-input-label"> 
          Título
          <input type="text" value={this.state.title} data-testid="title-input" onChange={this.onChange}/>
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.onChange}/> 
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input type="text" value={this.state.imagePath} data-testid="image-input" onChange={this.onChange}/> 
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea name="estadoFavorito" value={this.state.storyline} data-testid="storyline-input" onChange={this.onChange} />
        </label>
        <label data-testid="rating-input-label">
        Avaliação
          <input type="number" value={this.state.rating} data-testid="rating-input" onChange={this.onChange}/> 
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select value={this.state.genre} data-testid="genre-input">
            <option data-testid="genre-option" value='action'>Ação</option>
            <option data-testid="genre-option" value='comedy'>Comédia</option>
            <option data-testid="genre-option" value='thriller'>Suspense</option>
          </select> 
        </label>
        <button data-testid="send-button" onChange={this.onChange}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
