import React from 'react';

//import connect function to connect our store to this component
import { connect } from 'react-redux';

class TodoList extends React.Component  {
 state = {
   newTodo: ""
 }

  handleChanges = e => {
    this.setState({newTodo: e.target.value})
  }

  addTodo = e  => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo)
  }

  toggleTodo = (e, id) => {
    this.props.toggleTodo(id)
  }

  render(){
    return (
        <div className="todo-list">
          <p>hi im the todolist</p>
          {/* <p>{props.debug}</p> */}
        </div>
      );
    }
  }
//mapStateToProps is a function that... maps our state object from the Redux store to the props on our component
const mapStateToProps = state => {
  return {
    debug: state.debug
  }
}

//function currying used to connect redux store to our todolist component
export default connect(mapStateToProps, {})(TodoList);