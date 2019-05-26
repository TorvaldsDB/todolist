import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div style={{marginTop: '50px', marginLeft: '20px'}}>
        <Input
          value={this.state.inputvalue}
          placeholder="todo info"
          style={{width: '300px', marginRight: '10px'}}
        />
        <Button type="primary">Submit</Button>
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
}

export default TodoList;
