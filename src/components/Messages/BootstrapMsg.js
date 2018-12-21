import React, { Component } from 'react';

import { Alert, Button, ButtonToolbar, OverlayTrigger, Popover } from 'react-bootstrap';

class AlertDismissable extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleDismiss = this.handleDismiss.bind(this);
      this.handleShow = this.handleShow.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleDismiss() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      if (this.state.show) {
        return (
          <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
            <h4>Oh! you got an error</h4>
            <p>
              Error text goes here
            </p>
            <p>
              <Button bsStyle="danger">action</Button>
              <span> or </span>
              <Button onClick={this.handleDismiss}>Cancel</Button>
            </p>
          </Alert>
        );
      }
  
      return <Button onClick={this.handleShow}>Show Alert</Button>;
    }
  }

  const popoverClick = (
    <Popover id="popover-positioned-scrolling-bottom" title="Popover bottom">
      <strong>Some text!</strong> Text or any other elements.
    </Popover>
  );
  
  const popoverHoverFocus = (
    <Popover id="popover-positioned-scrolling-left" title="Popover left">
      <strong>Some text!</strong> Text or any other elements.
    </Popover>
  );
  
  const popoverFocus = (
    <Popover id="popover-positioned-scrolling-top" title="Popover top">
      <strong>Some text!</strong> Text or any other elements.
    </Popover>
  );
  
  const popoverClickRootClose = (
    <Popover id="popover-positioned-scrolling-right" title="Popover right">
      <strong>Some text!</strong> Text or any other elements.
    </Popover>
  );

class Messages extends Component {

    render(){

        return (
           <div className="row">
                <div className="col-md-6"> 
                    <div className="panel panel-default">
                    <div className="panel-body">
                    <div class="alert alert-success alert-dismissible" id="myAlert">
                        <a href="#" class="close">&times;</a>
                        <strong>Success!</strong> This alert box could indicate a successful or positive action.
                    </div>
                    <div class="alert alert-info alert-dismissible" id="myAlert">
                        <a href="#" class="close">&times;</a>
                        <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                    </div>
                    <div class="alert alert-warning alert-dismissible" id="myAlert">
                        <a href="#" class="close">&times;</a>
                        <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                    </div>
                    <div class="alert alert-danger alert-dismissible" id="myAlert">
                        <a href="#" class="close">&times;</a>
                        <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                    <div className="panel-body">
                        <AlertDismissable />
                    </div>
                    </div>
                </div> <br/>
                <div className="col-md-6">
                <div className="panel panel-default">
                <div className="panel-body">
                    <ButtonToolbar>
                        <OverlayTrigger 
                            // trigger="click" 
                            placement="bottom" overlay={popoverClick}>
                            <Button>Click (Bottom side)</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            // trigger={['hover', 'focus']}
                            placement="left"
                            overlay={popoverHoverFocus}
                            >
                            <Button>Click (Left side)</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="focus" placement="top" overlay={popoverFocus}>
                            <Button>Click (Top side)</Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            // trigger="click"
                            rootClose
                            placement="right"
                            overlay={popoverClickRootClose}
                            >
                            <Button>Click (Right side)</Button>
                        </OverlayTrigger>
                    </ButtonToolbar>
                    </div>
                    </div>
                </div>
           </div>
        )
    }
}

export default Messages;