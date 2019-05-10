import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

	render(){
		return (
			<Fragment>
        <div>
          {/* 花括号里面是 JS 的表达式, 这是一段注释 */}
          {
            // 这是一段单行的注释
          }
          <label htmlFor='inserArea'>输入内容</label>
          <input
            id='inserArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
			</Fragment>
		)
	}

  getTodoItem(){
		return this.state.list.map((item, index) => {
			return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
			)
		})
	}

  handleInputChange(e){
		// 这是一种古老的写法, 已经被函数淘汰. setState 要写作一个函数
    // this.setState({
    //   inputValue: e.target.value
    // })
		// 下面这种写法会报错, 因为 setState 是一个异步的函数, 这里获取不到 e.target
		// this.setState(() => ({
			// inputValue: e.target.value
		// }))
		// 需要提前对 e.target.value 的值做一次保留, 然后传递到 setState 函数中.
		const value = e.target.value;
		this.setState(() => ({
			inputValue: value
		}))
  }

  handleBtnClick(){
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
		// 下面的写法也是 OK 的, 但是这也是一个过时的写法.
		// this.setState(() => ({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
		// }))
		// 可以利用 setState 参数进行操作. 是最简洁的.
    // ES6里面规定: 箭头函数结果, 如果里面是对象需要用 ({.....}), {}内表示对象, 如果不是对象就只需要 {....}, {}内表示 块
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))
  }

  // handleItemDelete(index){
  //   // immutable
  //   // state 不允许我们做任何改变
  //   // 如果你强制做了 state 的修改, 那么性能优化就会出现问题
  //   const list = [...this.state.list];
  //   list.splice(index, 1);
  //
  //   // this.setState({
  //   //   list: list
  //   // })
  //   this.setState(() => ({
  //     list
  //   }))
  // }

  // 标准写法
  handleItemDelete(index){
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list} // {} 说明 list 是一个对象, 而且键值对相同都是 list 即 list: list
    })
  }
}
export default Todolist;
