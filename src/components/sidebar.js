import Button from '@material-ui/core/Button';

import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import _ from 'lodash';

import SimpleCard from './simplecard'

let self;
class Header extends Component{
    constructor(props) {
        super(props);
 
        this.state = {
            openOrClose: 'close',
            itemClicked: false,
            manuItemClicked: 'Dashboard',
            childOpen: false,
            childNav: ''
        };
        self = this;
    }

    logout(){
        const history = createBrowserHistory();
        history.push('/');
        history.go('/');
    }

    renderComponent = (componentName) => {
        this.setState({
            mobileOpen: false,
            manuItemClicked: componentName
        })
  }

    openNav = () => {
        document.getElementById("mySidenav").style.width = "220px";
        document.getElementById("header-icon").style.marginLeft = "227px";
        document.getElementById("mainBodyComp").style.marginLeft = "225px";
        document.getElementsByClassName("childSideNav")[0].style.marginLeft = "40px";
        this.setState({
            openOrClose: 'open'
        })
    }
    
    closeNav = () => {
        document.getElementById("mySidenav").style.width = "40px";
        document.getElementById("header-icon").style.marginLeft = "52px";
        document.getElementById("mainBodyComp").style.marginLeft = "46px";
        document.getElementsByClassName("childSideNav")[0].style.marginLeft = "5px";
        this.setState({
            openOrClose: 'close'
        })
    }

    toggleChildNav(){
        if (this.state.childOpen === false){
            document.getElementsByClassName("childSideNav")[0].style.display = 'block'
            this.setState({
                childOpen: true
            })
        } else {
            document.getElementsByClassName("childSideNav")[0].style.display = 'none'
            this.setState({
                childOpen: false
            })
        }
    }

    childNavClicked(e){
        
        if (e.target.className){
            var split = e.target.className.split(" ")
            if (split[1] === 'fa'){
                document.getElementsByClassName('bar-child')[0].classList.add("childClicked")
                let current = document.getElementsByClassName('line-child');
                current[0].className = current[0].className.replace(" childClicked", "");
                self.setState({
                    childNav: 'Bar Graph'
                });
            } else {
                document.getElementsByClassName('line-child')[0].classList.add("childClicked")
                let current = document.getElementsByClassName('bar-child');
                current[0].className = current[0].className.replace(" childClicked", "");
                self.setState({
                    childNav: 'Line Graph'
                });
            }
        } else{
            if (e.target.id === 'bar-graph'){
                document.getElementById('bar-graph').classList.add("childClicked")
                let current = document.getElementById('line-chart')
                current.className = current.className.replace(" childClicked", "");
                self.setState({
                    childNav: 'Bar Graph'
                });
            } else{
                document.getElementById('line-chart').classList.add("childClicked")
                let current = document.getElementById('bar-graph')
                current.className = current.className.replace(" childClicked", "");
                self.setState({
                    childNav: 'Line Graph'
                });
            }
        }
    }

    navItemClicked = (e) => {
        var header = document.getElementById("parentNavDiv");
        var spans = header.getElementsByClassName("span");
        for (var i = 0; i < spans.length; i++) {
            var current = document.getElementsByClassName("activeNavItem");
            if (current.length > 0) { 
                current[0].className = current[0].className.replace(" activeNavItem", "");
                if (e.target.id === 'Dashboard'){
                    var ele = document.getElementsByClassName("fa-dashboard");
                    ele[0].classList.add("activeNavItem");
                    document.getElementsByClassName("childSideNav")[0].style.display = 'none'
                } else if (e.target.id === 'Table'){
                    var ele = document.getElementsByClassName("fa-table");
                    ele[0].classList.add("activeNavItem");
                    document.getElementsByClassName("childSideNav")[0].style.display = 'none'
                } else if(e.target.id === 'Inbox'){
                    var ele = document.getElementsByClassName("fa-envelope");
                    ele[0].classList.add("activeNavItem");
                    document.getElementsByClassName("childSideNav")[0].style.display = 'none'
                } else if(e.target.id === 'Graph'){
                    var ele = document.getElementsByClassName("fa-bar-chart");
                    ele[0].classList.add("activeNavItem");
                    this.toggleChildNav()
                } else{
                    var split = e.target.className.split(" ")
                    var ele = document.getElementsByClassName(split[2]);
                    ele[0].classList.add("activeNavItem");
                    
                    if (split[2] === 'fa-bar-chart' && this.state.childOpen === false){
                        if (this.state.openOrClose === 'close'){
                            document.getElementsByClassName("childSideNav")[0].style.marginLeft = "5px";
                        }
                        document.getElementsByClassName("childSideNav")[0].style.display = 'block'
                        this.setState({
                            childOpen: true
                        })
                    } else {
                        document.getElementsByClassName("childSideNav")[0].style.display = 'none'
                        this.setState({
                            childOpen: false
                        })
                    }
                }
                break;
            }
        }
       
    }

    render () {
        return( 
            <div>
                <div className="myHeader">
                    <div id="header-icon">
                        {this.state.openOrClose === 'close' ? 
                            <a style={{color: 'white'}}><span onClick={this.openNav} style={{marginTop: "14px"}} className="left fa fa-bars" aria-hidden="true"></span></a>
                            : <span style={{marginTop: "14px", color: 'white'}} href="javascript:void(0)" onClick={this.closeNav} className="left fa fa-close" aria-hidden="true"></span>
                        }
                        <div className="logoutBtn" onClick={this.logout}>Logout</div>
                    </div>
                </div>
                <div>
                    <div id="mySidenav" className="mysidenav">
                        <h4 className="fa fa-meetup" style={{fontSize: "26px", marginLeft: "70px", marginTop: "18px", color: "white"}}>Logo</h4>
                        <div style={{marginTop: "40px"}} id="parentNavDiv">
                            <div className="span fa fa-dashboard activeNavItem" onClick={(e)=>{this.navItemClicked(e); this.renderComponent('Dashboard')}}>
                                <span style={{marginLeft: '18px', fontFamily: 'Verdana'}} id="Dashboard">Dashboard </span>
                            </div> 
                            <div className="span fa fa-table" onClick={(e)=>{this.navItemClicked(e); this.renderComponent('Table')}}>
                                <span style={{marginLeft: '18px', fontFamily: 'Verdana'}} id="Table">Tables </span>
                            </div>
                            <div className="span fa fa-bar-chart" onClick={(e)=>{this.navItemClicked(e); this.renderComponent('Graph')}}>
                                <span style={{marginLeft: '18px', fontFamily: 'Verdana'}} id="Graph">Graph
                                    {this.state.childOpen===false ? 
                                    <span id="arrow" className="fa fa-chevron-right" style={{display: 'inline', marginLeft: '85px'}}></span>
                                    :
                                    <span id="arrow" className="fa fa-chevron-down" style={{display: 'inline', marginLeft: '85px'}}></span>
                                    }
                                </span>
                            </div>
                            <span className="childSideNav">
                                <div id="bar-graph" className="span fa fa-bar-chart bar-child childClicked" onClick={this.childNavClicked}>
                                    <span id="bar-graph" style={{marginLeft: '16px', fontFamily: 'Verdana'}}>Bar Graph</span>
                                </div>
                                <div  id="line-chart" className="fa fa-line-chart line-child" onClick={this.childNavClicked}>
                                    <span id="line-chart" style={{marginLeft: '16px', fontFamily: 'Verdana'}}>Line Graph </span>
                                </div>
                            </span>
                            <div className="span fa fa-envelope" onClick={(e)=>{this.navItemClicked(e); this.renderComponent('Inbox')}}>
                                <span style={{marginLeft: '18px', fontFamily: 'Verdana'}} id="Inbox">Inbox</span>
                            </div>
                        </div>
                    </div>
                </div>
                <SimpleCard renderComp={this.state.manuItemClicked} childNav={this.state.childNav}/>
            </div>
        )
    }
}
export default Header;