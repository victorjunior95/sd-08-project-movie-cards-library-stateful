import React from 'react';
import PropTypes from 'prop-types';
import InputTextSearch from './InputTextSearch';
import InputCheckbox from './InputCheckbox';
import InputSelect from './InputSelect';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.renderInputText = this.renderInputText.bind(this);
    this.renderCheckbox = this.renderCheckbox.bind(this);
  }

  renderInputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <InputTextSearch
        searchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
      />
    );
  }

  renderCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <InputCheckbox
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ onBookmarkedChange }
      />
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <InputSelect
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      />
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.renderInputText()}
        {this.renderCheckbox()}
        {this.renderSelect()}
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
