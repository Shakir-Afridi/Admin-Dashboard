import React, { Component } from 'react';

import profilePicture from '../../assets/images/profile.jpg';

class ViewProfile extends Component {

    render(){

        return (
            <div className="profileCard">
                <div style={{width: '100%', borderRadius: "5px 5px 0 0", height: '300px', backgroundColor: "#1f3944", textAlign: 'center'}}>
                    <img src={profilePicture} style={{marginTop: "5%", borderRadius: "50%", width: '80%', height: '80%'}} />
                </div>
                <h1>Shakir Ullah</h1>
                <p className="profileTitle">Mern Stack Developer</p>
                <p>Speridian Technologies, Lahore</p>
                <div style={{margin: "25px 0"}} className="profile-links">
                    <a href="#" style={{marginRight: '20px'}}><i className="fa fa-linkedin"></i></a> 
                    <a href="#" style={{marginRight: '20px'}}><i className="fa fa-twitter"></i></a>   
                    <a href="#" style={{marginRight: '20px'}}><i className="fa fa-facebook"></i></a> 
                </div>
                <p><button className="profile-contact-btn" style={{color: 'white'}}>Contact</button></p>
            </div>
        )
    }
}

export default ViewProfile;