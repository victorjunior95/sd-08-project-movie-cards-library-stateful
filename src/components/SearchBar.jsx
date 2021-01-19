import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputText from './form/InputText';
import InputCheckbox from './form/InputCheckbox';
import Select from './form/Select';
import selectData from './form/selectOptions';

class SearchBar extends Component {
  inputText(value, onChange) {
    return (
      <InputText name="searchText" onChange={ onChange } value={ value }>
        Inclui o texto:
      </InputText>
    );
  }

  inputCheckbox(checked, onChange) {
    return (
      <InputCheckbox name="bookmarkCheckbox" onChange={ onChange } value={ checked }>
        Mostrar somente favoritos
      </InputCheckbox>
    );
  }

  select(data, value, onChange) {
    return (
      <Select data={ data } name="selectGenre" onChange={ onChange } value={ value }>
        Filtrar por gênero
      </Select>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          { this.inputText(searchText, onSearchTextChange) }
          { this.inputCheckbox(bookmarkedOnly, onBookmarkedChange) }
          { this.select(selectData, selectedGenre, onSelectedGenreChange) }
        </form>
      </section>
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
