import React from 'react';
import './search-panel.css';

const SearchPanel = ({onSearchingChange}) => {
  return (
    <input type='text' placeholder='type to search'
      className='search-panel'
      onChange={(evt) => onSearchingChange(evt.target.value)}
    ></input>
  );
}

export default SearchPanel;
