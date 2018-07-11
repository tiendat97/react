

import React from 'react';
import CreateToDo from './create-todo'; 
import _ from 'lodash';
import TodosList from './TodosList'
const todos = [
    {
        task: 'make React tutorial',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
];

class app extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            todos
        };
    };
    render(){
        return(
            <div>
                <h1> React Todos App </h1>
            
                <TodosList  
                    todos = {this.state.todos} 
                    // toggleTask={this.toggleTask.bind(this)}
                />
            </div>
        );
    }

    

}

export default app;