import React from 'react';
import './styles.css';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { contents } from "../../pages/Contents";
import { useNavigate } from 'react-router-dom';

const items = contents.map(item => ({
  id: item.id,
  name: item.title,
  image: item.imagePath
}));

function SearchBox() {
  const navigateTo = useNavigate();

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
    navigateTo(`/recipe_demo/recipe/${item.id}`);
  }
  
  const handleOnFocus = () => {
    console.log('Focused')
  }
  
  const formatResult = (item) => {
    // change the item.name below to title search
    return (
      <>
        <span className='search-result'>
          <img src={item.image} alt="Recipe" width="100" height="100"/>
          {item.name}
        </span>
      </>
    )
  }

  return (
    <div className='search-box'>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        showIcon={false}
        maxResults={3}
        autoFocus
        styling={
          {
            backgroundColor: "lavender",
          }
        }
        formatResult={formatResult}
      />
    </div>
  );
}

export default SearchBox;