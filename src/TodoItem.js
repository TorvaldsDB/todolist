import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('child shouldComponentUpdate');
    // if (nextProps.content !== this.props.content) {
    //   return true;
    // } else {
    //   return false;
    // }
    return (nextProps.content !== this.props.content)
  }

  render(){
    console.log('child render')
    const { content } = this.props;

    return(
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  handleClick = () => {
    const { deleteItem, index } = this.props;

    deleteItem(index);
  }

  // 当一个组件从父组件接收参数
  // 只要父组件的render函数重新执行了, 子组件的这个生命周期函数就会被执行.
  // 如果这个组件第一次存在于父组件中, 不会执行
  // 如果这个组件之前已经存在于父组件中, 才会执行
  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps');
  }

  // 当这个组件即将被从页面中剔除的时候, 会被执行.
  componentWillUnmount(){
    console.log('child componentWillUnmount');
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // content 要么是 string, 要么是 nember.
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  content: 'Learing React'
}

export default TodoItem;
