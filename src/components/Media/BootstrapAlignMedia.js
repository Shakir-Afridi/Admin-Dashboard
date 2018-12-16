import React, { Component } from 'react';

// images 
import image1 from '../../assets/images/sidenav.jpg';
import image2 from '../../assets/images/phone.jpg';
import image3 from '../../assets/images/back.jpg';

class AlignMedia extends Component {

    render(){

        return (
            <div>
                <div className="media">
                    <div className="media-left media-top">
                        <img src={image1} className="media-object" style={{width: "80px", height: "80px"}} />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">Media on Top</h4>
                        <p>Your text goes here</p>
                    </div>
                </div>
                <div className="media">
                    <div className="media-left media-middle">
                        <img src={image2} className="media-object" style={{width: "80px", height: "80px"}} />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">Media in Middle</h4>
                        <p>Your text goes here</p>
                    </div>
                </div>
                <div className="media">
                    <div className="media-left media-bottom">
                        <img src={image3} className="media-object" style={{width: "80px", height: "80px"}} />
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">Media in Bottom</h4>
                        <p>Your text goes here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlignMedia;