import React, { Component } from 'react';

// images 
import image1 from '../../assets/images/img11.png';
import image2 from '../../assets/images/img10.jpg';
import image3 from '../../assets/images/img9.jpg';
import image4 from '../../assets/images/img7.jpg';

class BootstrapCarousel extends Component {

    render(){

        return (
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={image1} alt="Heading" style={{width: '100%'}}/>
                            <div className="carousel-caption">
                                <h3>Heading</h3>
                                <p>Something about the pic!</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src={image2} alt="Heading" style={{width: '100%'}}/>
                            <div className="carousel-caption">
                                <h3>Heading</h3>
                                <p>Something about the pic!</p>
                            </div>
                        </div>
                        
                        <div className="item">
                            <img src={image3} alt="Heading" style={{width: '100%'}}/>
                            <div className="carousel-caption">
                                <h3>Heading</h3>
                                <p>Something about the pic!</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src={image4} alt="Heading" style={{width: '100%'}}/>
                            <div className="carousel-caption">
                                <h3>Heading</h3>
                                <p>Something about the pic!</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default BootstrapCarousel;