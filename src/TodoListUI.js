import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render(){
    return (
      <div style={{marginTop: '50px', marginLeft: '20px'}}>
        <Input
          value={this.props.inputValue}
          placeholder="todo info"
          style={{width: '300px', marginRight: '10px'}}
          onChange={this.props.handleInputChange}
        />
        <Button
          type="primary"
          onClick={this.props.handleBtnClick}
        >Submit</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.props.handleItemDelete.bind(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoListUI;
