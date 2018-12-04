
import React, {Component} from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// components
import Sidebar from './sidebar';
import Dashboard from './dashboard';

export default class Example extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
        };
    }
    
    componentDidMount(){
    }

    render() {
        return (
            <div>
                <nav> <Sidebar /> </nav>
            </div>
        );
    }
}