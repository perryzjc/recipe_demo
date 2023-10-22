import React from 'react';
import './styles.css';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { contents } from "../../pages/Contents";

const items = contents.map(item => ({
  id: item.id,
  name: item.title,
}));

const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
}

const handleOnHover = (result) => {
  // the item hovered
  console.log(result)
}

const handleOnSelect = (item) => {
  // the item selected
  console.log(item)
}

const handleOnFocus = () => {
  console.log('Focused')
}

const formatResult = (item) => {
  // change the item.name below to title search
  return (
    <>
      <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
    </>
  )
}

function SearchBox() {
  return (
    <div className='search-box'>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
      />
    </div>
  );
}

export default SearchBox;