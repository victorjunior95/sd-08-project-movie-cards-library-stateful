import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    inputText(searchText, onSearchTextChange) {
        return (
            <div>
                <label htmlFor="input-text" data-testid="text-input-label">
                    Inclui o texto:
                    <input
                    id="searchText"
                    name="searchText"
                    da-testeid="text-input"
                    onChange={ onSearchTextChange }
                    value={ searchText }
                    type="text"
                    />
                </label>
            </div>
        );
    }

    inputCheckBox(bookmarkedOnly, onBookmarkedChange) {
        return (
            <div>
                <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
                    Mostrar somente favoritos
                    <input
                    id="checkbox-input"
                    name="checkbox-input"
                    data-testid="checkbox-input"
                    checked={ bookmarkedOnly }
                    onChange={ onBookmarkedChange }
                    />
                </label>
            </div>
        );
    }

    inputSelect(selectedGenre, onSelectedGenreChange) {
        return (
            <label htmlFor="input-select" data-testeid="select-input-label">
                Filtrar por gênero
                <select
                name="select-input"
                id="select-input"
                data-testeid="select-input"
                value={ selectedGenre }
                onChange={ onSelectedGenreChange }>
                    <option data-testeid="select-option" value="">Todos</option>
                    <option data-testeid="select-option" value="action">Ação</option>
                    <option data-testeid="select-option" value="comedy">Comédia</option>
                    <option data-testeid="select-option" value="thriller">Suspense</option>
                </select>
            </label>
        )
    }

}

