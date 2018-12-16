import React, { Component } from 'react';

class Message extends Component {
    constructor(props){
        super(props);
        this.state ={
        }
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                Some Messages
                </div>
            </div>
        )
    }
}

export default Message;