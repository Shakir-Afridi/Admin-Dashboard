import React, { Component } from 'react';

// components
import DialogOverlay from './OverLayDialog';
import PanelOverlay from './OverlayPanel';
import TooltipsOverlay from './OverlayTooltips';

class OverLay extends Component {

    render(){

        return(
                <div className="row">
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h4>Dialog Overlay Using Primereact UI components</h4>
                                <DialogOverlay />
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h4>Panel Overlay Using Primereact UI components</h4>
                                <PanelOverlay />
                            </div>
                        </div>
                    </div> */}
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h4>Tooltips Using Primereact UI components</h4>
                                <TooltipsOverlay />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default OverLay;