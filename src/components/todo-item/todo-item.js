import React from 'react';
import './todo-item.css';

const  TodoItem = ({label, onLabelClick, done, important}) => {
  let itemClass = 'todo-item';
  if (done) {
    itemClass += ' todo-item--done';
  }

  if (important) {
    itemClass += ' todo-item--important'
  }

  return (<span className={itemClass} onClick={onLabelClick}>{label}</span>);
};

export default TodoItem;
