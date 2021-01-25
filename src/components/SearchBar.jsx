// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import FiltraTexto from './FiltraTexto';
import FiltraFavoritos from './FiltraFavoritos';
import FiltraGenero from './FiltraGenero';
import AddMovie from './AddMovie';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <div>
          <FiltraTexto />
          <FiltraFavoritos />
          <FiltraGenero />
          <AddMovie />
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = ({
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,

}).isRequired;

export default SearchBar;
