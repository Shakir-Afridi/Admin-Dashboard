import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import SimpleCard from '../ParentComponent/simplecard'

class SideNavClose extends Component{
    constructor(props) {
        super(props);
 
        this.state = {
            manuItemClicked: this.props.renderComponent
        };
    }

    componentWillUnmount(){
        this.props.updateRenderedComp(this.state.manuItemClicked)
        console.log(this.state.manuItemClicked)
    }

    renderComponent(componentName){
        this.props.updateRenderedComp(componentName)
        this.setState({
            manuItemClicked: componentName
        })
    }

    render () {
        return( 
            <div>
                <div id="SideNavClose">
                <ul style={{marginTop: "40px"}} id="parentNavDiv">
                    <li onClick={(e)=>{this.renderComponent('Dashboard')}}>
                        <span className="fa fa-dashboard active"></span>
                        <a id="Dashboard">Dashboard </a>
                    </li> 
                    <li onClick={(e)=>{this.renderComponent('Table')}}>
                        <span className="a fa fa-table"></span>
                        <a id="Table">Tables </a>
                    </li>
                    <li onClick={(e)=>{this.renderComponent('Profile')}}>
                        <span className="fa fa-user"></span>
                        <a id="Profile">Profile</a>
                    </li>
                    <li onClick={(e)=>{this.renderComponent('Graph')}}>
                        <span className="fa fa-bar-chart"></span>
                        <a id="Graph">Charts</a>
                    </li>
                    <li onClick={(e)=>{this.renderComponent('Forms')}}>
                        <span  className="fa fa-check-square-o"></span>
                        <a id="Forms">Forms/Dropdowns</a>
                    </li>
                    <li onClick={(e)=>{this.renderComponent('Panels')}}>
                        <span className="fa fa-clone"></span>
                        <a id="Panels">Panels</a>
                    </li>
                    <li onClick={(e)=>{this.renderComponent('Messages')}}>
                        <span className="fa fa-comments"></span>
                        <a id="Messages">Messages/Alerts</a>
                    </li>
                    <li onClick={(e)=>{this.renderComponent('Manu')}}>
                        <span className="fa fa-caret-square-o-down"></span>
                        <a id="Manu">Manu</a>
                    </li>
                    <li onClick={(e)=>{this.renderComponent('Overlay')}}>
                        <span className="fa fa-commenting"></span>
                        <a id="Overlay">Overlay</a>
                    </li>
                    <li onClick={(e)=>{this.renderComponent('Media')}}>
                        <span className="fa fa-picture-o"></span>
                        <a id="Media">Media</a>
                    </li>
                </ul>
                </div>
                <SimpleCard renderComp={this.state.manuItemClicked}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.renderComponent.renderedComp)
    return {
        renderComponent: state.renderComponent.renderedComp
    }
}

export default connect(mapStateToProps, actions)(SideNavClose);