// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
    };

    this.props = {
      onSearchTextChange(event) {
        console.log(event.target);
        this.setState(() => ({ [event.target.name]: event.target.value }));
      },
      onBookmarkedChange() { this.setState({ bookmarkedOnly: true }); },

    };
  }

  render(props) {
    const { searchText } = this.state;
    const { bookmarkedOnly } = this.state;
    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
            <br />
            <input type="text" name="searchText" value={ searchText } onChange={ this.props.onSearchTextChange } data-testid="text-input" />
          </label>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            <input type="checkbox" data-testid="checkbox-input" name="checkbox" checked={ bookmarkedOnly } onChange={ this.props.onBookmarkedChange } />
            Mostrar somente favoritos
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = ({
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}).isRequired;

export default SearchBar;
