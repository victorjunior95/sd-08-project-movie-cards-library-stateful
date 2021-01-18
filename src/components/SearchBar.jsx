// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: 'My Text',
      bookmarkedOnly: true,
      selectedGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
    const { searchText } = this.state;
    console.log({ searchText });
  }

  onBookmarkChange() {
    const { bookmarkedOnly } = this.state;
    console.log(bookmarkedOnly);
  }

  onSelectGenderChange() {
    const { selectedGenre } = this.state;
    console.log({ selectedGenre });
  }

  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            name="text-input"
            id="text-input"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
