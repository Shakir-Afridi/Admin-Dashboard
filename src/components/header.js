import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { createBrowserHistory } from 'history';

class Header extends Component{

    logout(){
        const history = createBrowserHistory();
        history.push('/');
        history.go('/');
    }
    render () {
        return( 
            <header>
               <nav className="nav-extended">
                    <div className="nav-wrapper" id="header">
                        <a href="#!" className="left" style={{marginLeft: '10px'}}>Logo</a>
                        <ul className="right">
                            <li><Button onClick={this.logout} style={{color: '#fff'}}>Logout</Button></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header;