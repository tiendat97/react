import React from 'react';

class CreateToDo extends React.Component{
    render(){
        return(
            <form onSubmit={this.handleCreate.bind(this)} >
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event){
        event.preventDefault(); // khong load lai page
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value ='';
    }
}

export default CreateToDo;