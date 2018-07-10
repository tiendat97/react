

import React from 'react';

class MapFunc extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [
                {
                    component: "First..",
                    id: 1
                },
                {
                    component: "Second..",
                    id: 2
                },
                {
                    component: "Third..",
                    id: 3
                }
            ]
        }

    }
    render(){
        return(
            <div>
                {this.state.data.map((tiendat, i) => <Content key = {i} child = {tiendat} />
        )}
            </div>
        )
    }
}   

class Content extends React.Component{
    render(){
        return(
            <div>
                <div> {this.props.child.component} </div>
                <div> {this.props.child.id} </div>
            </div>
        )
    }
}

export default MapFunc;