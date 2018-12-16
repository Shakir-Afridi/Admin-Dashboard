import React, {Component} from 'react';
import {ScrollPanel} from 'primereact/scrollpanel';

class ScrollPanelP extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ScrollPanel style={{width: '100%', height: '200px'}}>
                                <div style={{padding:'1em', lineHeight:'1.5'}}>
                                    Your text goes here <br/>Your text goes here <br/>Your text goes here <br/>
                                    Your text goes here <br/>Your text goes here <br/>Your text goes here <br/>
                                    Your text goes here <br/>Your text goes here <br/>Your text goes here <br/>
                                    Your text goes here <br/>Your text goes here <br/>Your text goes here <br/>
                                </div>
                            </ScrollPanel>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ScrollPanel style={{width: '100%', height: '200px'}} className="custombar1">
                                <div style={{ padding: '1em', lineHeight: '1.5' }}>
                                    Your text goes here <br/>Your text goes here <br/>Your text goes here <br/>
                                    Your text goes here <br/>Your text goes here <br/>Your text goes here <br/>
                                    Your text goes here <br/>Your text goes here <br/>Your text goes here <br/>
                                    Your text goes here <br/>Your text goes here <br/>Your text goes here <br/>
                                </div>
                            </ScrollPanel>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ScrollPanel style={{width: '100%', height: '200px'}} className="custombar2">
                                <div style={{padding: '1em', lineHeight: '1.5', width: '600px' }}>
                                    Your text goes here Your text goes here Your text goes here Your text goes here Your text goes here<br/>
                                    Your text goes here Your text goes here Your text goes here Your text goes here Your text goes here<br/>
                                    Your text goes here Your text goes here Your text goes here Your text goes here Your text goes here<br/>
                                    Your text goes here Your text goes here Your text goes here Your text goes here Your text goes here<br/>
                                </div>
                            </ScrollPanel>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScrollPanelP;