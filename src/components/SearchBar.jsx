import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    inputText(searchText, onSearchTextChange) {
        return (
          <label htmlFor="" data-testid="text-input-label">
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

    render() {
        const {
            searchText,
            onSearchTextChange,
        } = this.props;

        return (
            <form data-testid="seach-bar-form" >
                {this.inputText(searchText, onSearchTextChange)}
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