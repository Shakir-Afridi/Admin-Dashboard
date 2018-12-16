import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
        };
    }

    render(){
        let { logo, openSideNav } = this.props
        return(
            <div className="myHeader">
                <div id="header-icon">
                    <p id="Logo" className="fa fa-meetup" style={{marginTop: "14px", marginLeft: "40px", color: "white"}}>
                        <span style={{fontFamily: "verdana"}}>{logo}</span>
                    </p>
                    <div id="SideNavBars" className="fa fa-bars" style={{marginTop: "14px", marginLeft: "100px", color: "white"}}></div>
                    <a className="bars" style={{color: 'white'}}><span style={{fontSize: "26px", marginTop: "16px"}} id="bars" className="fa fa-bars" aria-hidden="true"></span></a>
                    <div className="logoutBtn"> 
                        <div className="fa fa-sign-out logout" onClick={this.logout}>
                            <span style={{fontFamily: "verdana", marginRight: "15px"}}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;