import React, { Component } from 'react';

// components
import BootstrapCarousel from './BootstrapCarousel';
import CoverFlowCarousel from './CoverFlowCarousel';

class RemainingBody extends Component{
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
                    <h3>CoverFlow Carousel</h3>
                    <CoverFlowCarousel />
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-body"> 
                    <h3>Bootstrap Carousel</h3>
                    <BootstrapCarousel />  
                </div>
            </div>
            </div>
        )
    }
}

export default RemainingBody;