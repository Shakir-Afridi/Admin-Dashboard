import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

// Components
import SimpleCard from '../ParentComponent/simplecard';

class SideNav extends Component {
    constructor(props){
        super(props);

        this.state={
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

    render(){
        return(
            <div>
            <div id="mySidenav" className="mysidenav">
                <h4 className="fa fa-meetup" style={{fontSize: "26px", marginLeft: "70px", marginTop: "15px", color: "white"}}>Logo</h4>
                <ul style={{marginTop: "40px"}} id="parentNavDiv">
                    <li className="fa fa-dashboard active" onClick={(e)=>{this.renderComponent('Dashboard')}}>
                        <a id="Dashboard">Dashboard </a>
                    </li> 
                    <li className="fa fa-table" onClick={(e)=>{this.renderComponent('Table')}}>
                        <a id="Table">Tables </a>
                    </li>
                    <li className="fa fa-user" onClick={(e)=>{this.renderComponent('Profile')}}>
                        <a id="Profile">Profile</a>
                    </li>
                    <li className="fa fa-bar-chart" onClick={(e)=>{this.renderComponent('Graph')}}>
                        <a id="Graph">Charts</a>
                    </li>
                    <li className="fa fa-check-square-o" onClick={(e)=>{this.renderComponent('Forms')}}>
                        <a id="Forms">Forms</a>
                    </li>
                    <li className="fa fa-clone" onClick={(e)=>{this.renderComponent('Panels')}}>
                        <a id="Panels">Panels</a>
                    </li>
                    <li className="fa fa-comments" onClick={(e)=>{this.renderComponent('Messages')}}>
                        <a id="Messages">Messages</a>
                    </li>
                    <li className="fa fa-caret-square-o-down" onClick={(e)=>{this.renderComponent('Manu')}}>
                        <a id="Manu">Manu</a>
                    </li>
                    <li className="fa fa-commenting" onClick={(e)=>{this.renderComponent('Overlay')}}>
                        <a id="Overlay">Overlay</a>
                    </li>
                    <li className="fa fa-picture-o" onClick={(e)=>{this.renderComponent('Media')}}>
                        <a id="Media">Media</a>
                    </li>
                </ul>
            </div>

            <SimpleCard 
                renderComp={this.state.manuItemClicked}
                />
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

export default connect(mapStateToProps, actions)(SideNav);