import React from 'react';
import ReactDOM from 'react-dom';

class SetState extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler(){
        var item = "set State ...";
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    };

    render(){
        return(
            <div>
                <button onClick = {this.setStateHandler} >SET STATE</button>
                <h4>State: {this.state.data}</h4>
            </div>
        )
    }
}

export default SetState;