import React from 'react';

//import connect function to connect our store to this component
import { connect } from 'react-redux';

const TodoList = props => {
  return (
    <div className="todo-list">
      <p>hi im the todolist</p>
      <p>{props.debug}</p>
    </div>
  );
}

//mapStateToProps is a function that... maps our state object from the Redux store to the props on our component
const mapStateToProps = state => {
  return {
    debug: state.debug
  }
}

//function currying used to connect redux store to our todolist component
export default connect(mapStateToProps, {})(TodoList);