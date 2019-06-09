import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '50px', marginLeft: '20px'}}>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        style={{width: '300px', marginRight: '10px'}}
        onChange={props.handleInputChange}
      />
      <Button
        type="primary"
        onClick={props.handleBtnClick}
      >Submit</Button>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={props.handleItemDelete.bind(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoListUI;
