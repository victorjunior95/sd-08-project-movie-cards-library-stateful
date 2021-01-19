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

    this.onChangeAction = this.onChangeAction.bind(this);
    this.botaoCliqued = this.botaoCliqued.bind(this);
  }

  onChangeAction(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  botaoCliqued() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input name="title" type="text" value={this.state.title} data-testid="title-input" onChange={this.onChangeAction}/>

        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input name="subtitle" type="text" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.onChangeAction}/>

        <label data-testid="image-input-label">Imagem</label>
        <input name="imagePath" type="text" value={this.state.imagePath} data-testid="image-input" onChange={this.onChangeAction}/>

        <label data-testid="storyline-input-label">Sinopse</label>
        <textarea name="storyline" value={this.state.storyline} data-testid="storyline-input" onChange={this.onChangeAction}></textarea>

        <label data-testid="rating-input-label">Avaliação</label>
        <input name="rating" type="number" value={this.state.rating} data-testid="rating-input" onChange={this.onChangeAction}/>

        <label data-testid="genre-input-label">Gênero</label>
        <select name="genre" value={this.state.genre} data-testid="genre-input" onChange={this.onChangeAction}>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>

        <button type="reset" data-testid="send-button" onClick={this.props.onClick(this.state)} onClick={this.botaoCliqued} >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
