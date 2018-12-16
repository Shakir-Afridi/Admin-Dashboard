import React, { Component } from 'react';

class Accordain extends Component {

    render(){

        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h4>Accordain without footer</h4>
                            <div class="panel-group" id="accordion">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse11">Panel 1</a>
                                        </h4>
                                    </div>
                                    <div id="collapse11" class="panel-collapse collapse">
                                        <div class="panel-body">Your text</div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse22">Panel 2</a>
                                        </h4>
                                    </div>
                                    <div id="collapse22" class="panel-collapse collapse">
                                        <div class="panel-body">Your text</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h4>Accordain with footer</h4>
                            <div class="panel-group" id="accordion1">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion1" href="#collapse1">Panel 1</a>
                                        </h4>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse">
                                        <div class="panel-body">Your text</div>
                                        <div class="panel-footer">Footer</div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion1" href="#collapse2">Panel 2</a>
                                        </h4>
                                    </div>
                                    <div id="collapse2" class="panel-collapse collapse">
                                        <div class="panel-body">Your text</div>
                                        <div class="panel-footer">Footer</div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>

                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h4>Simple Panel with header and footer</h4>
                            <div class="panel panel-primary">
                                <div class="panel-heading">Header</div>
                                <div class="panel-body">Body</div>
                                <div class="panel-footer">Footer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default Accordain;