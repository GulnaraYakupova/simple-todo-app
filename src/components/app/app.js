import React, {
  Component
} from 'react';
import './app.css';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../filter/filter';
import NewItem from '../new-item/new-item';

export default class App extends Component {
  constructor() {
    super();
    this.maxId = 100;

    this.state = {
      todoData: [
        this.toFormData(1, 'Reply email', 'Todo'),
        this.toFormData(2, 'Meet Sarah', 'Todo'),
        this.toFormData(3, 'Make Dinner', 'Todo'),
        this.toFormData(4, 'Milk', 'To buy'),
        this.toFormData(5, 'Cheese', 'To buy'),
        this.toFormData(6, 'Book', 'To buy'),
        this.toFormData(7, 'Play with kids', 'Family'),
      ],
      searchingText: '',
      activeFilter: 'all',
    };

    this.labelClickHandler = (id) => {
      this.setState(({
        todoData
      }) => {
        const indx = todoData.findIndex((item) => item.id === id);

        const newData = [
          ...todoData.slice(0, indx),
          {
            ...todoData[indx],
            done: !todoData[indx].done
          },
          ...todoData.slice(indx + 1),
        ];

        return {
          todoData: newData,
        }
      })
    };

    this.importantClickHandler = (id) => {
      this.setState(({
        todoData
      }) => {
        const indx = todoData.findIndex((item) => item.id === id);

        const newData = [
          ...todoData.slice(0, indx),
          {
            ...todoData[indx],
            important: !todoData[indx].important
          },
          ...todoData.slice(indx + 1),
        ];

        return {
          todoData: newData,
        }
      })
    };

    this.deleteClickHandler = (id) => {
      this.setState(({
        todoData
      }) => {
        const indx = todoData.findIndex((item) => item.id === id);

        const newData = [
          ...todoData.slice(0, indx),
          ...todoData.slice(indx + 1),
        ];

        return {
          todoData: newData,
        }
      })
    };

    this.newItemAddHandler = (label, group) => {
      this.setState(({
        todoData
      }) => {
        const newData = [...todoData];
        newData.push(this.toFormData(this.maxId++, label, group));

        return {
          todoData: newData,
        }
      })
    };

    this.searchingChangeHandler = (text) => {
      this.setState({
        searchingText: text
      });
    }

    this.filterClickHandler = (filter) => {
      this.setState({activeFilter: filter})
    }
  }

  toFormData(id, label, group, important = false, done = false) {
    return ({
      id,
      label,
      group,
      important,
      done
    });
  }

  searchItems(items, text) {
    return items.filter((item) => item.label.toLowerCase().includes(text.toLowerCase()));
  }

  filterItems(items, filter) {
    switch (filter) {
      case 'active':
        return items.filter((item) => !item.done);
      case 'done' :
        return items.filter((item) => item.done);
      default:
        return  items;
    }
  }

  render() {
    const {
      todoData,
      searchingText,
      activeFilter
    } = this.state;
    const groups = ['Todo', 'To buy', 'Family'];
    const filteredData = this.filterItems(todoData, activeFilter);
    const searchingData = this.searchItems(filteredData, searchingText);
    return ( 
      <main className = "app">
        <AppHeader />
        <div className = 'app__search-filter' >
          <SearchPanel onSearchingChange = {
            this.searchingChangeHandler}/> 
          <Filter
          activeFilter={activeFilter}
          onFilterClick={this.filterClickHandler}/>
        </div> 
        <TodoList data = {searchingData}
          onLabelClick = {this.labelClickHandler}
          onImportantBtnClick = {this.importantClickHandler}
          onDeleteButtonClick = {this.deleteClickHandler} />
        <NewItem groups = {groups}
          onNewItemSubmit = {this.newItemAddHandler} /> 
      </main>);
    }
  }
