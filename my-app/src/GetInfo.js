

import React from 'react';
class GetInfo extends React.Component {
    constructor(props){
        super(props);
        this.layThongtin=this.layThongtin.bind(this);
    }
    layThongtin(){
        var text=this.refs.myInput.value;
        alert(text);
    }
    render() {
        return (
            <div>
                <input ref="myInput" type="text"/>
                <button onClick={this.layThongtin}>click</button>
            </div>
        );
    }
}

export default GetInfo;