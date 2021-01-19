import React from 'react';

class SeachBar extends React.Component {
  render() {
    return (
      <div>
        <form action="" data-testid="search-bar-form">
          <label htmlFor="searchbar" data-testid="text-input-label">
            Inclui o texto
            <input data-testid="text-input" type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default SeachBar;
