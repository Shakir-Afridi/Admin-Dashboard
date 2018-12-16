import React, { Component } from 'react';

// images 
import image1 from '../../assets/images/sidenav.jpg';
import image2 from '../../assets/images/phone.jpg';
import image3 from '../../assets/images/back.jpg';

class NestedMedia extends Component {

    render(){

        return(
            <div className="container">
                <div className="media">
                    <div className="media-left">
                        <img src={image1} className="media-object" style={{width: "50px", height: "50px"}}/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">Name 1 <small><i>Posted on February 19, 2016</i></small></h4>
                        <p>Your text goes here</p>
                        <div className="media">
                            <div className="media-left">
                                <img src={image2} className="media-object" style={{width: "50px", height: "50px"}}/>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Name 2 <small><i>Posted on February 20, 2016</i></small></h4>
                                <p>Your text goes here</p>
                            <div className="media">
                                <div className="media-left">
                                    <img src={image3} className="media-object" style={{width: "50px", height: "50px"}}/>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Name 3 <small><i>Posted on February 21, 2016</i></small></h4>
                                    <p>Your text goes here</p>
                                </div>
                            </div>
                            </div>
                                <div className="media">
                                    <div className="media-left">
                                        <img src={image2} className="media-object" style={{width: "50px", height: "50px"}}/>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Name 4 <small><i>Posted on February 20, 2016</i></small></h4>
                                        <p>Your text goes here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="media">
                        <div className="media-left">
                            <img src={image1} className="media-object" style={{width: "50px", height: "50px"}}/>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Name 5 <small><i>Posted on February 19, 2016</i></small></h4>
                            <p>Your text goes here</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NestedMedia;