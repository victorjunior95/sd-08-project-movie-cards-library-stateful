import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input type="text" value={ this.props.searchText } onChange={ this.props.onSearchTextChange } data-testid="text-input"></input>
          </label>
        </form>
      </div>

    )
  }

}

// SearchBar.propTypes = {
//   search: PropTypes.arrayOf(PropTypes.object).isRequired,
//   searchText: PropTypes.string.isRequired,
//   onSearchTextChange: PropTypes.function.isRequired,
//   bookmarkedOnly: PropTypes.boolean.isRequired,
//   onBookmarkedChange: PropTypes.function.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.function.isRequired,
// };

export default SearchBar;
