import React from 'react';
import './todo-group.css';
import TodoItem from '../todo-item/todo-item';

const TodoGroup = ({group, tasks, color, onLabelClick, onImportantBtnClick, onDeleteButtonClick}) => {

  const style = {
    backgroundColor: color,
  };

  const todoGroupMarkup = tasks.map(({id, label, done, important})=> (
    <li key={id}>
      <TodoItem
        label={label}
        onLabelClick={()=>onLabelClick(id)}
        done={done}
        important={important}
      />
      <div className='todo-group__buttons'>
        <button className='todo-group__button todo-group__button--important fa fa-exclamation'
        onClick={()=>onImportantBtnClick(id)}
        ></button>
        <button className='todo-group__button todo-group__button--delete fa fa-trash'
        onClick={()=> onDeleteButtonClick(id)}
        ></button>
      </div>
    </li>
  ));

  return (<div className='todo-group'>
    <h3 style={style}>{group}</h3>
    <ul className='todo-group__list'>
      {todoGroupMarkup}
    </ul>
  </div>);
};

export default TodoGroup;
