import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../store/modules/todo';

import TodoList from '../components/TodoList';

class TodoContainer extends Component{
    

    handleChange = e => {
        const {TodoActions} = this.props;
        TodoActions.changeInput(e.target.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        const { TodoActions, input ,day} = this.props;
        console.log({input});
        TodoActions.create(input,day); // 등록
        TodoActions.changeInput(''); // 인풋 값 초기화
    };
    handleDone = id => {
        const { TodoActions } = this.props;
        TodoActions.done(id);
    };

    handleDelete = id => {
        const { TodoActions } = this.props;
        TodoActions.del(id);
    };
    render() {
        const { input, list,day } = this.props;
        return (
          <TodoList
            selected ={day}
            input={input}
            todoList={list}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            onDone={this.handleDone}
            onDelete={this.handleDelete}
          />
        );
      }
}

const mapStateToProps = (state) => ({
    input: state.todo.input,
    list: state.todo.list,
    day: state.week.day,
});

const mapDispatchToProps = dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch),
   
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);