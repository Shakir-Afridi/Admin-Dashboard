import React, { Component } from 'react';

// components 
import SampleTable from '../components/table';
import DashBoard from '../components/dashboard';

class SimpleCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderComponent (compName) {
        console.log('compName', compName)   
    }

    render(){
        let { renderComp, childNav } = this.props;
        let compToRender;
        if (renderComp === 'Table') {
            compToRender = <SampleTable />
            childNav = ''
        } else if (renderComp === 'Dashboard'){
            compToRender = <DashBoard />
            childNav = ''
        } else if (renderComp === 'Inbox'){
            childNav = ''
            compToRender = <h1>Inbox</h1>
        } else{
            if (childNav == 'Line Graph'){
                compToRender = <h1>Line Graph</h1>
            } else{
                compToRender = <h1>Bar Graph</h1>
            }
        }
        return (
            <div id="mainBodyComp" style={{marginLeft: "46px", marginRight: "5px", color: 'black'}}>
                <div className="panel panel-default">
                    <div className="panel-body"> </div>
                </div>
                <ul className="breadcrumb" style={{textAlign: 'right', marginTop: "45px"}}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">{renderComp}</a></li>
                    <li>{childNav}</li>
                </ul>
                
                <div className="panel panel-default">
                    <div className="panel-body">
                        {compToRender}
                     </div>
                </div>
            </div>
        );
    }
}


export default SimpleCard;