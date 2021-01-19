// implement SearchBar component here
import React from 'react';

// import Input from './Input';
// import SelectGenre from './SelectGenre';

// const optionList = [
//   {
//     name: 'Todos',
//     value: '',
//   },
//   {
//     name: 'Ação',
//     value: 'action',
//   },
//   {
//     name: 'Comédia',
//     value: 'comedy',
//   },
//   {
//     name: 'Suspense',
//     value: 'thriller',
//   },
// ];
function SearchBar() {
  return (
    <form data-testid="search-bar-form">
      {/* <Input type="text" testid="text-input" labelName="Inclui o texto:" />
      <SelectGenre
        labelName="Filtrar por gênero"
        testid1="select-input-label"
        testid2="select-input"
        testid3="select-option"
        optionList={ optionList }
      /> */}
    </form>
  );
}

export default SearchBar;
