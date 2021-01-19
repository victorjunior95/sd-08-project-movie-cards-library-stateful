import React, { Component } from 'react'


export default class SearchBar extends Component {
    
    testeFuncao (searchText, onSearchTextChange) {
        return (
            <label data-testid="text-input-label">
                  Inclui o texto:
                   <input onChange={onSearchTextChange} value={searchText} data-testid="text-input" type="text"/>
               </label>
        );
    }
    render() {
        const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
        return (
           <form data-testid="search-bar-form">
               {this.testeFuncao(searchText, onSearchTextChange)}
               <label data-testid="checkbox-input-label">
                   Mostrar somente favoritos
                    <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input"/>
               </label>
               <label data-testid="select-input-label">
                    Filtrar por gênero
                   <select value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
                       <option data-testid="select-option" value="">Todos</option>
                       <option data-testid="select-option" value="action">Ação</option>
                       <option data-testid="select-option" value="comedy">Comédia</option>
                       <option data-testid="select-option" value="thriller">Suspense</option>
                   </select>
               </label>
           </form>
        );
    }
}
