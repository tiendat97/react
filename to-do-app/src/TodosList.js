import React from 'react';

import TodosListHeader from './todo-list-header';
import _ from 'lodash';
import TodosListItems from './todos-list-item';


class TodosList extends React.Component{
    renderItems(){
        return _.map(this.props.todos, (todo, index) => <TodosListItems key={index} {...todo }/> );
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

export default TodosList;