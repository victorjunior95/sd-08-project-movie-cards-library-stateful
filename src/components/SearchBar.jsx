import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    inputText(searchText, onSearchTextChange) {
        return (
          <label data-testid="text-input-label">
            Inclui o texto:  
            <input 
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            />
          </label>
        );
    }

    inputCheckBox(bookmarkedOnly, onBookmarkedChange) {
        return (
            <label data-testid="checkbox-input-label">
                Mostrar somente favoritos
                <input
                type="checkbox"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
                data-testid="checkbox-input"
                />
            </label>
        );
    }

    inputselectGenre(selectedGenre, onSelectedGenreChange ) {
        return (
            <label data-testid="select-input-label">
                Filtrar por gênero
                <select
                data-testid="select-input"
                value={ selectedGenre }
                onChange={ onSelectedGenreChange }
                >
                    <option data-testid="select-option" value="">Todos</option>
                    <option data-testid="select-option" value="action">Ação</option>
                    <option data-testid="select-option" value="comedy">Comédia</option>
                    <option data-testid="select-option" value="thriller">Suspense</option>
                </select>
            </label>
        );
    }


    render() {
        const {
            searchText,
            onSearchTextChange,
            bookmarkedOnly,
            onBookmarkedChange,
            selectedGenre,
            onSelectedGenreChange,
        } = this.props;

        return (
            <form data-testid="seach-bar-form" >
                {this.inputText(searchText, onSearchTextChange)}
                {this.inputCheckBox(bookmarkedOnly, onBookmarkedChange)}
                {this.inputselectGenre(selectedGenre, onSelectedGenreChange)}
            </form>
        );
    }
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    onBookmarkedChange: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    onSelectedGenreChange: PropTypes.func.isRequired,
  };

export default SearchBar;