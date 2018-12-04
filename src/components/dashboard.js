import React, { Component } from 'react';

import SampleTable from './table';

class Dashboard extends Component{
    render(){
        return (
            <div className="myContainer">
                <div className="row">
                    <div className="col-md-3">
                    {/* backgroundImage: 'radial-gradient(#166986, #DB2F11)' used to add gradient*/} 
                        <div className="panel panel-default myCard" style={{textAlign: 'center'}}>
                            <div className="panel-heading" style={{backgroundColor: '#0E7A63', color: 'white'}}> heading </div>
                            <div className="panel-body">
                                <h4><b>John Doe</b></h4> 
                                <p>Architect & Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default myCard" style={{textAlign: 'center'}}>
                            <div className="panel-heading" style={{backgroundColor: '#0E7A63', color: 'white'}}> heading </div>
                            <div className="panel-body">
                                <h4><b>John Doe</b></h4> 
                                <p>Architect & Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default myCard" style={{textAlign: 'center'}}>
                            <div className="panel-heading" style={{backgroundColor: '#0E7A63', color: 'white'}}> heading </div>
                            <div className="panel-body">
                                <h4><b>John Doe</b></h4> 
                                <p>Architect & Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default myCard" style={{textAlign: 'center'}}>
                            <div className="panel-heading" style={{backgroundColor: '#0E7A63', color: 'white'}}> heading </div>                        
                            <div className="panel-body">
                                <h4><b>John Doe</b></h4> 
                                <p>Architect & Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Dashboard;