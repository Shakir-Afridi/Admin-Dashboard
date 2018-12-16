import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Tooltip} from 'primereact/tooltip';
import {Button} from 'primereact/button';

class TooltipP extends Component {
        
    constructor() {
        super();
        this.state = {title: null, tooltipPosition: 'right'};
    }

    onTooltipPosition = (e) => {
        let element = e.target;

        switch(element.id) {
            case "username":
                this.setState({title: "Enter your username", tooltipPosition: 'right'});
            break;

            case "surname":
                this.setState({title: "Enter your surname", tooltipPosition: 'top'});
            break;

            case "age":
                this.setState({title: "Enter your age", tooltipPosition: 'bottom'});
            break;

            case "email":
                this.setState({title: "Enter your email", tooltipPosition: 'left'});
            break;

            default:
            break;
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <InputText type="text" placeholder="Right" tooltip="Tooltip show displays on right" />              
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <InputText type="text" placeholder="Top" tooltip="Tooltip show displays on top" tooltipOptions={{position: 'top'}} />    
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <InputText type="text" placeholder="Bottom" tooltip="Tooltip show displays on bottom" tooltipOptions={{position: 'bottom'}} />    
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <InputText type="text" placeholder="Left" tooltip="Tooltip show displays on left" tooltipOptions={{position: 'left'}} />    
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <InputText type="text" placeholder="Focus and Blur" tooltip="Focus and Blur" tooltipOptions={{event: 'focus'}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TooltipP;