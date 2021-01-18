import React from 'react';
import PropTypes from 'prop-types';
import TextInputLabel from '../myComponents/TextInputLabel';
import CheckBoxInputLabel from '../myComponents/CheckBoxInputLabel';
import SelectInputLabel from '../myComponents/SelectInputLabel';

class SearchBar extends React.Component {
  createTextInput(searchText, onSearchTextChange) {
    return (
      <TextInputLabel
        value={ searchText }
        onChange={ onSearchTextChange }
        dataTesteId="text-input"
        dataLabelTesteId="text-input-label"
      />
    );
  }

  createCheckBoxInput(bookmarkedOnly, onBookmarkedChange) {
    return (
      <CheckBoxInputLabel
        checked={ bookmarkedOnly }
        onChange={ onBookmarkedChange }
        dataTesteId="checkbox-input"
        dataLabelTesteId="checkbox-input-label"
      />
    );
  }

  createSelectInput(selectedGenre, onSelectedGenreChange) {
    return (
      <SelectInputLabel
        value={ selectedGenre }
        onChange={ onSelectedGenreChange }
        dataTesteId="select-input"
        dataLabelTesteId="select-input-label"
        dataOptTesteId="select-option"
      />
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          { this.createTextInput(searchText, onSearchTextChange) }
          { this.createCheckBoxInput(bookmarkedOnly, onBookmarkedChange) }
          { this.createSelectInput(selectedGenre, onSelectedGenreChange) }
        </form>
      </div>
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
