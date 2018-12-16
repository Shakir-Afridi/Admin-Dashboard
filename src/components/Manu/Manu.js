import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Components 
import Bootstrap from './BootstrapManu';
import PrimereactManu from './PrimereactTabManu';
import TieredMenu from './PrimereactTieredManu';
import SlideManu from './PrimereactSlideManu';
import PanelMenu from './PrimereactPanelManu';

let self;
class Manu extends Component {
    constructor(props){
        super(props);
        this.state ={
        }
        self = this
    }

    render(){
        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h3>Bootstrap Manus</h3>
                        <Bootstrap />
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h3>Primereact UI Components Manus</h3>
                        <PrimereactManu />
                        <div className="row">
                            <div className="col-md-4">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        {/* <h3>TieredMenu using primereact UI Components</h3> */}
                                        <TieredMenu />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        {/* <h3>SlideManu using primereact UI Components</h3> */}
                                        <SlideManu />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        {/* <h3>PanelMenu using primereact UI Components</h3> */}
                                        <PanelMenu />
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

export default Manu;