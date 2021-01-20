import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import SelectGenre from './SelectGenre';

const optionList = [
  {
    name: 'Todos',
    value: '',
  },
  {
    name: 'Ação',
    value: 'action',
  },
  {
    name: 'Comédia',
    value: 'comedy',
  },
  {
    name: 'Suspense',
    value: 'thriller',
  },
];

const DEF_SELECT_GENRE_PROPS = {
  labelName: 'Gênero',
  testid1: 'select-input-label',
  testid2: 'select-input',
  testid3: 'select-option',
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
    // console.log(e.target.name);
  }

  InputText() {
    // const { title } = this.state;
    const { searchText, onSearchTextChange } = this.props;
    return (
      <>
        <Input
          name="text-input"
          labelName="Inclui o texto:"
          onChange={ onSearchTextChange }
          value={ searchText }
        />
        <br />
      </>
    );
  }

  InputBookmarked() {
    // const { genre } = this.state;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <>
        <label htmlFor="bookmarked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarked"
            optionList={ optionList }
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
        <br />
      </>
    );
  }

  InputGenre() {
    // const { genre } = this.state;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <>
        <SelectGenre
          { ...DEF_SELECT_GENRE_PROPS }
          optionList={ optionList }
          onChange={ onSelectedGenreChange }
          value={ selectedGenre }
        />
        <br />
      </>
    );
  }

  /* eslint-disable */
  render() {
    return (
      <form data-testid="search-bar-form">
        {this.InputText()}
        {this.InputBookmarked()}
        {this.InputGenre()}
      </form>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: null,
  bookmarkedOnly: false,
  selectedGenre: '',
  onSelectedGenreChange: null,
  onBookmarkedChange: null,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
};

export default SearchBar;
