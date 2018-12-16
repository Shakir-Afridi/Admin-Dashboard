import React, {Component} from 'react';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Button} from 'primereact/button';

import imagePath from '../../assets/images/phone.jpg';

class OverlayPanelP extends Component {
        
    render() {
        
        return (
            <div>
                <div className="content-section implementation">
                    <Button type="button" label="Toggle" onClick={(e) => this.op.toggle(e)} />
                    <OverlayPanel ref={(el) => this.op = el}>
                        <img src={imagePath} alt="Galleria 1" height="200" width="200"/>
                    </OverlayPanel>
                </div>
            </div>
        )
    }
}

export default OverlayPanelP;