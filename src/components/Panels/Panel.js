import React, { Component } from 'react';

// components
import Accordain from './BootstrapAccordian';
import Fieldset from './ToggleablePanel';
import PrimereactCard from './PrimereactCard';
import PrimereactScrollPanel from './PrimereactScrollPanel';

class Panel extends Component {
    constructor(props){
        super(props);
        this.state ={
        }
    }

    render(){
        return(
            <div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <h3>Bootstap Panels</h3>
                    <Accordain />
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <h3>Primereact UI components Panels</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h4>Fieldset (Colapsable Panel)</h4>
                                    <Fieldset />  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h4> Card </h4>
                                    <PrimereactCard />  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h4>Scrollable Panels</h4>
                                    <PrimereactScrollPanel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Panel;