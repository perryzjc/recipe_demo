import React, {useEffect, useState} from 'react';
import './styles.css';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// import { contents } from "../../pages/Contents";
import { useNavigate } from 'react-router-dom';
import {resolveImagePath} from "../../utils/resolveImagePath.js";


function SearchBox(contents) {
  const [searchItems, setSearchItems] = useState([]);
  const navigateTo = useNavigate();

  // Transform data to match the expected format for search
  useEffect(() => {
    if (contents && contents.contents) {
      const transformedItems = contents.contents.map(item => ({
        ...item,
        name: item.title // Transform 'title' to 'name'
      }));
      setSearchItems(transformedItems);
    }
  }, [contents]);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results)
  }
  
  const handleOnHover = (result) => {
    // the item hovered
    //console.log(result)
  }
  
  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    // navigateTo(`/recipe/${item.id}`);
    navigateTo(resolveImagePath(`/recipe/${item.id}`));
  }
  
  const handleOnFocus = () => {
    //console.log('Focused')
  }

  // console.log("test contents")
  //   console.log(contents)
  // console.log("test contents.contents")
  //   console.log(contents.contents)
  
  const formatResult = (item) => {
    // change the item.name below to title search
    console.log("Format item: ", item);
    //console.log(item)
    return (
      <>
        <span className='search-result'>
          <img src={resolveImagePath(item.imagePath)} alt="Recipe" width="100" height="100"/>
          <div className='search-content'>
            <div className='search-content-category'>
              {item.category}
            </div>
            <div>
              {item.title}
            </div>
          </div>
        </span>
      </>
    )
  }

  return (
    <div className='search-box'>
      <ReactSearchAutocomplete
        // items={contents.contents}
        items={searchItems}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        showIcon={false}
        maxResults={5}
        autoFocus
        styling={
          {
            backgroundColor: "lavender",
            borderRadius: "10px",
            fontSize: "20px",
            height: "30px",
          }
        }
        formatResult={formatResult}
        placeholder="🔎 Search for a recipe..."
        type="text" 
      />
    </div>
  );
}

export default SearchBox;