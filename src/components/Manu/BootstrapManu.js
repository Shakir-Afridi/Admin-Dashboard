import React, { Component } from 'react';

class BootstapManu extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){

        return (
            <div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#manu11">Manu1</a></li>
                        <li><a data-toggle="tab" href="#menu22">Menu 2</a></li>
                        <li><a data-toggle="tab" href="#menu33">Menu 3</a></li>
                        <li><a data-toggle="tab" href="#menu44">Menu 4</a></li>
                    </ul>

                    <div className="tab-content">
                        <div id="manu11" className="tab-pane fade in active">
                            {/* call your component or any element in here */}
                            <h3>Manu 1</h3>
                        </div>
                        <div id="menu22" className="tab-pane fade">
                            {/* call your component or any element in here */}
                            <h3>Menu 2</h3>
                        </div>
                        <div id="menu33" className="tab-pane fade">
                            {/* call your component or any element in here */}
                            <h3>Menu 3</h3>
                        </div>
                        <div id="menu44" className="tab-pane fade">
                            {/* call your component or any element in here */}
                            <h3>Menu 4</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-body">
                    <ul className="nav nav-pills">
                        <li className="active"><a data-toggle="pill" href="#manu1">Manu 1</a></li>
                        <li><a data-toggle="pill" href="#menu2">Menu 1</a></li>
                        <li><a data-toggle="pill" href="#menu3">Menu 2</a></li>
                        <li><a data-toggle="pill" href="#menu4">Menu 3</a></li>
                    </ul>
                    
                    <div className="tab-content">
                        <div id="manu1" className="tab-pane fade in active">
                            {/* call your component or any element in here */}
                            <h3>Manu 1</h3>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                            {/* call your component or any element in here */}
                            <h3>Menu 2</h3>
                        </div>
                        <div id="menu3" className="tab-pane fade">
                            {/* call your component or any element in here */}
                            <h3>Menu 3</h3>
                        </div>
                        <div id="menu4" className="tab-pane fade">
                            {/* call your component or any element in here */}
                            <h3>Menu 4</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default BootstapManu;