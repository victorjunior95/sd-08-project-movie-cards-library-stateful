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
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
        return (
            <form>
                <label data-testid="title-input-label">
                    Título
                    <input type="text" onChange={this.handleInput} name="title" value={title} data-testid="title-input" />
                </label>
                <label data-testid="subtitle-input-label">
                    Subtítulo
                    <input type="text" onChange={this.handleInput} name="subtitle" value={subtitle} data-testid="subtitle-input" />
                </label>
                <label data-testid="image-input-label">
                    Imagem
                    <input type="text" onChange={this.handleInput} name="imagePath" value={imagePath} data-testid="image-input" />
                </label>
                    <label data-testid="storyline-input-label" >
                        Sinopse
                <textarea data-testid="storyline-input">
                        <input type="text" onChange={this.handleInput} name="storyline" value={storyline} />
                </textarea>
                    </label>
                <label data-testid="rating-input-label">
                    Avaliação
                    <input type="number" onChange={this.handleInput} name="rating" value={rating} data-testid="rating-input" />
                </label>
                <select>
                    <label data-testid="genre-input-label">
                        Gênero
                        <input  onChange={this.handleInput} name="genre" value={genre} data-testid="genre-input" />
                        <option data-testid="genre-option" value={"action"}>Ação</option>
                        <option data-testid="genre-option" value={"comedy"}>Comédia</option>
                        <option data-testid="genre-option" value={"thriller"}>Suspense</option>
                    </label>
                </select>
                <button data-testid="send-button" onClick={this.handleInput}>Adicionar filme</button>                
            </form>
        );
    }
}

export default AddMovie;
