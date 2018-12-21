import React, { Component } from 'react';

// components
import Inputs from './BoottsrapInputs';
import Calenders from './PrimereactInputs';
import Dropdowns from './React-BootstrapDropsdowns';

class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-5">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h3>Different inputs using Bootsrape 3</h3>
                            <hr/>
                            <Inputs />
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h3>Dropdowns using React-Bootsrap</h3>
                            <hr/>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <Dropdowns />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h3>Different inputs using Primereact UI Components</h3>
                            <hr/>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <Calenders />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;