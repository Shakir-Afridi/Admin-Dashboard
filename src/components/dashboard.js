import React, { Component } from 'react';

import SampleTable from './table';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="panel panel-default">
            <div className="panel-body">
            <div className="myContainer">
                <div className="row">
                    <div className="col-md-3">
                    {/* backgroundImage: 'radial-gradient(#166986, #DB2F11)' used to add gradient*/} 
                        <div className="panel panel-default myCard" style={{backgroundColor: 'SlateBlue'}}>
                            <div className="panel-body">
                                <div>
                                    <h4><b>Some thing </b></h4> 
                                    {/* <span className="badge">6</span> */}
                                    <p>Architect & Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default myCard" style={{backgroundImage: "linear-gradient(60deg, #66bb6a, #43a047)"}}>
                            <div className="panel-body">
                                <h4><b>John Doe</b></h4> 
                                <p>Architect & Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default myCard" style={{backgroundImage: "linear-gradient(60deg, #26c6da, #00acc1)"}}>
                            <div className="panel-body">
                                <h4><b>John Doe</b></h4> 
                                <p>Architect & Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default myCard" style={{backgroundImage: "linear-gradient(60deg, #ffa726, #fb8c00)"}}>
                            <div className="panel-body">
                                <h4><b>John Doe</b></h4> 
                                <p>Architect & Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;