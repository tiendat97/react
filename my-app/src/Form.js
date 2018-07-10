import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        
        this.state= {
            data: "Init data .."
        }

        this.updateState = this.updateState.bind(this);
    };

    updateState(e){
        this.setState({data: e.target.value})
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState} />
                <h3>{this.state.data}</h3> 
            </div>
        )
    }
}

export default Form;