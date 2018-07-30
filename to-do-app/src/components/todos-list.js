import React from 'react';
import TodosListHeader from './todos-list-header';
import _ from 'lodash';
import TodosListItems from './todos-list-item';

class TodosList extends React.Component{
    renderItems(){
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodosListItems key={index} {...todo } {...props}/> );
        // task ={todo.task} isCompleted = {todo.isCompleted}
    }

    render(){
        return(
            <table>
                <TodosListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}

//todos-list

export default TodosList;