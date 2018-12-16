import React, {Component} from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';

class Overlay extends Component {
        
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }

    onShowHide = (event) => {
        this.setState({
            visible: false
        });
    }

    render() {
        const popupFooter = (
            <div>
                <Button label="Ok" onClick={this.onShowHide} className="p-button-success" />
                <Button label="Cancel" onClick={this.onShowHide} className="p-button-danger" />
            </div>
        );

        return (
            <div>
                <div className="content-section implementation">
                    <Dialog header="Header" visible={this.state.visible} width="350px" footer={popupFooter} minY={70} onHide={this.onHide} maximizable={true}>
                        Your Text goes here
                    </Dialog>
                    <Button label="Show a Dialog Box" onClick={(e) => {this.setState({visible: true})}} />
                </div>
            </div>
        )
    }
}

export default Overlay;