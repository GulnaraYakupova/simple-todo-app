import React from 'react';
import './filter.css';


const Filter = ({activeFilter, onFilterClick}) => {

  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  const buttonsMarkup = buttons.map(({name, label}) => (
    <button
      className={`filter__button ${name===activeFilter ? 'filter__button--active' : ''}`}
      type='button' key={name}
      onClick={() => onFilterClick(name)}
    >{label}</button>
  ));

  return (
    <div className='filter'>
      {buttonsMarkup}
    </div>
  );
}

export default Filter;
