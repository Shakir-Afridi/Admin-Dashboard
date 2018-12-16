import React, { Component } from 'react';

import ComapanySampleCard from './ComapanySampleCard';
import SampleCard from './SampleCard';

//logo images for card
import Apple from '../../assets/images/apple.png';
import Linkedin from '../../assets/images/in.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';


class TopCards extends Component {

    render(){

        return (
            <div>
            <div className="row">
                <div className="col-md-3">
                    <div className="myCard">
                    <div className="panel panel-default" >
                        <div className="panel-body">
                            <ComapanySampleCard 
                                companyName="Apple"
                                about="Apple company"
                                team="76"
                                budget="$567.76"
                                success="86%"
                                logo={Apple}
                                />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="myCard">
                    <div className="panel panel-default" >
                        <div className="panel-body">
                        <ComapanySampleCard 
                                companyName="Linkedin"
                                about="Linkedin company"
                                team="89"
                                budget="$972.16"
                                success="78%"
                                logo={Linkedin}
                                />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="myCard">
                    <div className="panel panel-default" >
                        <div className="panel-body">
                            <ComapanySampleCard 
                                companyName="Twitter"
                                about="Twitter company"
                                team="67"
                                budget="$267.90"
                                success="66%"
                                logo={Twitter}
                                />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="myCard">
                    <div className="panel panel-default" >
                        <div className="panel-body">
                            <ComapanySampleCard 
                                companyName="Instagram"
                                about="Instagram company"
                                team="69"
                                budget="$472.16"
                                success="91%"
                                logo={Instagram}
                                />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="panel panel-default" style={{backgroundColor: "#4E433C", color: "#fff"}}>
                        <div className="panel-body">
                            <SampleCard 
                                icon={Instagram}
                                status="855"
                                statusLabel="LIKES PER DAY"
                                text="654457 NEW LIKES"
                                buttonName="Hit Like"
                                />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="panel panel-default" style={{backgroundColor: "#2B4964", color: "#fff"}}>
                        <div className="panel-body">
                            <SampleCard 
                                icon={Twitter}
                                status="1090"
                                statusLabel="NEW USERS"
                                text="134276 TOTAL USERS"
                                buttonName="Register Now"
                                />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="panel panel-default" style={{backgroundColor: "#512E5F", color: "#fff"}}>
                        <div className="panel-body">
                            <SampleCard
                                icon={Linkedin}
                                status="10"
                                statusLabel="NEW COURSES"
                                text="1376 TOTAL COURSES"
                                buttonName="Apply Now"
                                />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default TopCards;