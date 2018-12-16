import React, { Component } from 'react';

// components
import DashboardCards from './DashboardCards';
import DashboardBody from './DashboardBody';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <DashboardCards />
                <DashboardBody />
            </div>
        )
    }
}

export default Dashboard;