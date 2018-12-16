
import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

// components
import DataTable from './Datatable';
import BorderedTable from './BorderedTable';
import StrippedCenteredTable from './StrippedCenteredtable';

class SampleTable extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render(){
        return(
            <div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <DataTable />
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <BorderedTable />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <StrippedCenteredTable />
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        )
    }
}
  
export default SampleTable;