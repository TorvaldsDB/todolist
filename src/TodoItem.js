import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  render(){
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
