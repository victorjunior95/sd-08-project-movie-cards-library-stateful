import React from 'react';
import PropTypes from 'prop-types';
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
    this.alterar = this.alterar.bind(this);
    this.botao_form = this.botao_form.bind(this);
		this.enviar = this.enviar.bind(this);
	}	
  //-----
  inserir_titulo(title, onChange) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
  //-----
  inserir_subtitulo(subtitle, onChange) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    )
  }
  //-----
  inserir_imagem(imagePath, onChange) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    )
  }
  //---------
  inserir_sinopse(storyline, onChange) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    )
  }
  //---------
  inserir_avaliacao(rating, onChange) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    )
  }
  //-------
  inserir_genero(genre, onChange) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
  //-------
  enviar(retorno_callback) {
		retorno_callback(this.state);
		this.setState({
			subtitle: '',
			title: '',
			imagePath: '',
			storyline: '',
			rating: 0,
			genre: 'action',
		});
  }
  //-----
  alterar(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  //-------
  botao_form(onClick) {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (e) => {
          e.preventDefault();
          this.enviar(onClick);
        }}
      >
        Adicionar filme
      </button>
    );
  }
  //------
  render() {    
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.inserir_titulo(title, this.alterar) }
        { this.inserir_subtitulo(subtitle, this.alterar) }
        { this.inserir_imagem(imagePath, this.alterar) }
        { this.inserir_sinopse(storyline, this.alterar) }
        { this.inserir_avaliacao(rating, this.alterar) }
        { this.inserir_genero(genre, this.alterar) }
        { this.botao_form(onClick) }
      </form>
    );
  }
}

AddMovie.prototypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
