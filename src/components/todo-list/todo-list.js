import React from 'react';
import './todo-list.css';

import TodoGroup from '../todo-group/todo-group';

const groupLabelColors = [
  'rgb(0, 0, 0)',
  'rgb(214, 24, 93)',
  'rgb(226, 59, 53)',
]

const  TodoList = ({data, onLabelClick, onImportantBtnClick, onDeleteButtonClick}) => {
  const groups = new Set(data.map((item)=> item.group));

  const todoListMarkup = Array.from(groups).map((group, i) => (
    <TodoGroup group={group}
    color={groupLabelColors[i]}
    onLabelClick={onLabelClick}
    tasks={data.filter((item) => item.group === group)} key={group}
    onImportantBtnClick={onImportantBtnClick}
    onDeleteButtonClick={onDeleteButtonClick}
    />
  ));

  return (<section className='todo-list'>
    {todoListMarkup}
  </section>);
};

export default TodoList;