import React, { Component } from 'react';
import { SplitButton, MenuItem, ButtonToolbar, DropdownButton } from 'react-bootstrap';

class Dropdowns extends Component {

    renderDropdownButton(title, i) {
        return(
            <DropdownButton
                bsStyle={title.toLowerCase()}
                title={title}
                key={i}
                id={`dropdown-basic-${i}`}
                >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>
                    Active Item
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
        )
    }

    renderSplitDropdownButton(title, i) {
        return(
            <SplitButton
                bsStyle={title.toLowerCase()}
                title={title}
                key={i}
                id={`dropdown-basic-${i}`}
                >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>
                    Active Item
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
        )
    }

    render(){
        const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
        return(
            <div>
                <h4>Simple Dropdowns</h4>
                <ButtonToolbar>{BUTTONS.map(this.renderDropdownButton)}</ButtonToolbar>
                <h4>Dropdowns with SplitButton</h4>
                <ButtonToolbar>{BUTTONS.map(this.renderSplitDropdownButton)}</ButtonToolbar>
            </div>
        )
    }
}

export default Dropdowns;