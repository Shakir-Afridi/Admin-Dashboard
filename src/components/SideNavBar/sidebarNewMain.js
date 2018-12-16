import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import _ from 'lodash';
import $ from 'jquery';
import { connect } from 'react-redux';
import * as actions from '../../actions';


import SimpleCard from '../ParentComponent/simplecard';
import Header from '../Header/header';
import SideNavOpen from './sideNavOpen';
import SideNavClose from './sideNavClose';
import { element } from 'prop-types';

let self;
class Nav extends Component{
    constructor(props) {
        super(props);
 
        this.state = {
            width: 0
        };
        self = this;
    }

    updateDimensions = () => {
        this.setState({width: $(window).width()});
        // when dimension change retain the current state
        let comp = this.props.renderComponent
        if (self.state.width <= 600){
            $("#SideNavClose li").removeClass("active");
            $(`#${comp}`).parent().addClass("active");
            $('#SideNavBars').css("display", "none")
        } else {
            $(".mysidenav li").removeClass("active");
            $(`#${comp}`).parent().addClass("active");
            $('#SideNavBars').css("display", "inline");
            $('#SideNavBars').removeClass("fa fa-timess");
            $('#SideNavBars').addClass("fa fa-bars");
        }
    }

    componentWillMount() {
        self.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", self.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", self.updateDimensions);
    }

    render () {
        let sideNav;
        if (this.state.width <= 600){
            sideNav = <SideNavClose />
        } else {
            sideNav = <SideNavOpen />
        }

        return( 
            <div>
                <Header logo="Your Logo"/>
                {sideNav}
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

export default connect(mapStateToProps, actions)(Nav);