import React from "react";
import CreateToDo from "./create-todo";
import _ from "lodash";
import TodosList from "./components/todos-list";
import AddTodo from './containers/AddTodo'
import { connect } from 'react-redux'

const todos = [
  {
    task: "play soccer",
    isCompleted: false
  },
  {
    task: "eat lunch",
    isCompleted: false
  }
];

class app extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }
  
  render() {
    return (
      <div>
        <h1> Todos App </h1>
        <AddTodo />
        <CreateToDo      
          createTask={this.createTask.bind(this)}
        />
        <TodosList
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}

export default connect ()(app);
