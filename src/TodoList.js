import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{marginTop: '50px', marginLeft: '20px'}}>
        <Input
          value={this.state.inputvalue}
          placeholder="todo info"
          style={{width: '300px', marginRight: '10px'}}
          onChange={this.handleInputChange}
        />
        <Button
          type="primary"
          onClick={this.handleBtnClick}
        >Submit</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    }

    store.dispatch(action); // store dispatch action 的同时, 也把当前的 state 传递给了 reducer
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = {
      type: "add_todo_item"
    }

    store.dispatch(action)
  }
}

export default TodoList;
