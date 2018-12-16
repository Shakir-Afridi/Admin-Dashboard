import React, { Component } from 'react';

// components 
import SampleTable from '../Tables/table';
import DashBoard from '../Dashboard/dashboard';
import Profile from '../Profile/profile';
import Manu from '../Manu/Manu';
import Panel from '../Panels/Panel';
import Overlay from '../Overlays/Overlays';
import Message from '../Messages/Message';
import Form from '../Forms/Form';
import Chart from '../Charts/Chart';
import Media from '../Media/Media';

class SimpleCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        let { renderComp} = this.props;
        let compToRender;
        if (renderComp === 'Table') {
            compToRender = <SampleTable />
        } else if (renderComp === 'Dashboard'){
            compToRender = <DashBoard />
        } else if (renderComp === 'Profile'){
            compToRender = <Profile />
        } else if(renderComp === 'Forms'){
            compToRender = <Form />
        } else if(renderComp === 'Panels'){
            compToRender = <Panel />
        } else if(renderComp === 'Messages'){
            compToRender = <Message />
        } else if(renderComp === 'Manu'){
            compToRender = <Manu />
        } else if(renderComp === 'Overlay'){
            compToRender = <Overlay />
        } else if(renderComp === 'Media'){
            compToRender = <Media />
        } else{
            compToRender = <Chart />
        }
        return (
            <div id="mainBodyComp" style={{backgroundColor: "#eee"}}>
                {compToRender}
            </div>
        );
    }
}


export default SimpleCard;