import React, {Component} from 'react'
import './new-item.css';

export default class NewItem extends Component {
  constructor () {
    super();

    this.state = {
      label: '',
      groupValue: 'Todo',
    }

    this.onLabelChange = (evt) => {
      this.setState({
        label: evt.target.value,
      })
    } 

    this.onFormSubmit = (evt) => {
      evt.preventDefault();
      const {label, groupValue} = this.state;
      this.props.onNewItemSubmit(label, groupValue);
      this.setState({label: ''});
    }

    this.onGroupChange = (evt) => {
      this.setState({groupValue: evt.target.value});
    }
  }

  render() {
    const {groups} = this.props;

    const {groupValue} = this.state;
 
    const groupsMarkup = groups.map((group) => (
      <React.Fragment key={group}>
        <input className='new-item__checkbox'
         type='radio' name='group' value={group}
          id={group}
          onChange={this.onGroupChange}
          checked = {groupValue === group}
        />
        <label className='new-item__group'
         htmlFor={group}>{group}</label>
      </React.Fragment>
    ));

    return (
    <form className='new-item'
      onSubmit={this.onFormSubmit}
    >
      <input className='new-item__label'
        type='text' placeholder='type your next task...'
        onChange={this.onLabelChange}
        value={this.state.label}
      />
      <div className='new-item__groups-block'>
        {groupsMarkup}
      </div>
      <button className='new-item__button'
      type='submit'>Add</button>
    </form>
    );
  }
}
