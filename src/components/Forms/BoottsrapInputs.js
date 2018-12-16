import React, { Component } from 'react';

class Inputs extends Component {

    render(){

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h4>Simple text fields</h4>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-control" id="usr"/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Your Password" className="form-control" id="pwd"/>
                        </div>
                        <div className="form-group">
                            <textarea style={{resize: "none"}} placeholder="Your text" className="form-control" rows="4" id="text"></textarea>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                    <div className="row">
                        <div className="col-md-6">
                        <h4>Inputs with icons on left side</h4>
                        <form>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input id="email" type="text" className="form-control" name="email" placeholder="Your Email Address"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input id="password" type="password" className="form-control" name="password" placeholder="Your Password"/>
                            </div>
                        </form>
                        </div>

                        <div className="col-md-6">
                            <h4>Inputs with icons on right side</h4>
                            <form>
                                <div className="input-group">
                                    <input id="email" type="text" className="form-control" name="email" placeholder="Your Email Address"/>
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>   
                                </div>
                                    <div className="input-group">
                                    <input id="password" type="password" className="form-control" name="password" placeholder="Your Password"/>
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Text Area</h4>
                                <div className="input-group">
                                    <span className="input-group-addon">Text</span>
                                    <input id="msg" type="text" className="form-control" name="msg" placeholder="Your text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4>Search with icon button</h4>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search here..." name="search" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Check boxes</h4>
                                <label class="checkbox-inline"><input type="checkbox" value=""/> 1</label>
                                <label class="checkbox-inline"><input type="checkbox" value=""/> 2</label>
                                <label class="checkbox-inline"><input type="checkbox" value=""/> 3</label>
                            </div>
                            <div className="col-md-6">
                                <h4>Radio Buttons</h4>
                                <label class="checkbox-inline"><input type="radio" value=""/> 1</label>
                                <label class="checkbox-inline"><input type="radio" value=""/> 2</label>
                                <label class="checkbox-inline"><input type="radio" value=""/> 3</label>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-body">
                        <div class="form-group">
                            <h4>Select from a list</h4>
                            <select class="form-control">
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                                <option>option 5</option>
                                <option>option 6</option>
                            </select>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div class="form-group">
                            <h4>Select multiplr from a list by holding Shift button</h4>
                            <select multiple class="form-control">
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                                <option>option 5</option>
                                <option>option 6</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div class="form-group">
                            <div class="dropdown">
                                <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Dropdown
                                    <span class="caret"></span></button>
                                <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Manu 1</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Manu 2</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Manu 3</a></li>
                                    <li role="presentation" class="divider"></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Manu 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inputs;

