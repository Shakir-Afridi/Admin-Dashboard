import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

// images
import Image from '../../assets/images/phone.jpg';

class CardP extends Component {

    render() {
        const header = (
            <img alt="Image" src={Image}/>
        );
        const footer = (
            <span>
                {/* <Button label="Save" icon="pi pi-check"/>
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/> */}
                <div style={{textAlign: 'center'}}>Some footer</div>
            </span>
        );

        return (
            <div>
                <Card title="Title" subTitle="Subtitle" style={{width: '100%'}} className="ui-card-shadow" footer={footer} header={header}>
                    <div>Your text goees here</div>
                </Card>
            </div>
        )
    }
}

export default CardP;