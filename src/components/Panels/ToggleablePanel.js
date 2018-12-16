import React, {Component} from 'react';
import {Fieldset} from 'primereact/fieldset';

class FieldsetP extends Component {
        
    render() {
        return (
            <Fieldset legend="Some Legend"  toggleable={true}>
                Your text goes here <br/>
                Your text goes here <br/>
                Your text goes here <br/>
                Your text goes here <br/>
            </Fieldset>
        )
    }
}

export default FieldsetP;