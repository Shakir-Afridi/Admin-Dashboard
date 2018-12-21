import React, { Component } from 'react';
import Messages from './BootstrapMsg';

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
                    <Messages />
                </div>
            </div>
        )
    }
}

export default Message;