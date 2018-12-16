import React, { Component } from 'react';
import {TabMenu} from 'primereact/tabmenu';

let self;
class PrimereactManu extends Component {
    constructor(props){
        super(props);
        this.state = {
            primereactManu: "Home",
            items: [
                {label: 'Home', icon: 'pi pi-fw pi-home'},
                {label: 'Documentation', icon: 'pi pi-fw pi-file'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog'}
            ]
        }
        self = this
    }

    renderManu(e){
        self.setState({
            activeItem: e.value,
            primereactManu: e.value.label
        })
    }

    render(){

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="content-section implementation">
                        <TabMenu 
                            model={this.state.items} 
                            activeItem={this.state.activeItem} 
                            onTabChange={(e) => this.renderManu(e)} 
                            />
                    </div>

                    <div style={{paddingTop: "20px"}}>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                {/* call your component or any element in here */}
                                <h3>{this.state.primereactManu}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrimereactManu;