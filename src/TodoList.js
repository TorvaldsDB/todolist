import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {

  render() {
    return (
      <div style={{marginTop: '50px', marginLeft: '20px'}}>
        <Input placeholder="todo info" style={{width: '300px', marginRight: '10px'}}/>
        <Button type="primary">Submit</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={data}
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
