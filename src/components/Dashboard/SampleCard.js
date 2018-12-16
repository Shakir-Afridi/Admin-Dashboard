import React, { Component } from 'react';
import {Button} from 'primereact/button';

class SampleCard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const { icon, text, statusLabel, status, buttonName } = this.props;
        return (
                <div>
                    <div className="row">
                        <div className="col-md-2" style={{textAlign: 'center'}}>
                            <img src={icon} alt="logo" style={{width: '100%', height: "50%"}}/>
                        </div>
                        <div className="col-md-10">
                            <h4>{text}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel default-panel" style={{backgroundColor: "#eee"}}>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>{status}</h3>
                            <small style={{opacity: "0.5"}}>{statusLabel}</small>
                        </div>
                        <div className="col-md-8">
                            <div style={{float: 'right', paddingTop: "40px"}}>
                                <Button label={buttonName} className="p-button-raised p-button-secondary" />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SampleCard;