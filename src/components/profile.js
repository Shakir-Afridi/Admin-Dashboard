import React, { Component } from 'react';
import profilePicture from '../assets/images/pic.jpg';
class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="panel panel-default">
            <div className="panel-body">
            <div className="myContainer">
                 <div className="row">
                    <div className="col-md-8">
                    <div className="panel panel-default">
                            <div className="panel-heading" style={{backgroundColor: '#000', color: 'white', textAlign: 'center'}}> Edit Profile </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-4">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">Company</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                    <div className="col-md-4">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">Username</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                    <div className="col-md-4">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">Email</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">First Name</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                    <div className="col-md-6">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">Last Name</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">City</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                    <div className="col-md-4">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">Country</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                    <div className="col-md-4">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">Postal Code</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                </div>
                                <h4>About me</h4>
                                <div className="row">
                                    <div className="col-md-12">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">Some thing my self</span>
                                        <span className="border"></span>
                                    </label>
                                    </div>
                                </div>
                                <button className="btn btn-success">Update Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="profileCard">
                            {/* <img src="/w3images/team2.jpg" alt="John" style="width:100%" /> */}
                            <div style={{backgroundImage: `url(${profilePicture})`, width: '100%', height: '250px', backgroundSize: 'cover'}}></div>
                            <h1>Shakir Ullah</h1>
                            <p className="profileTitle">React.Js & Node.Js Developer</p>
                            <p>Namal Colleg, Mianwali</p>
                            <div style={{margin: "24px 0"}} className="profile-links">
                                <a href="#" style={{marginRight: '20px'}}><i className="fa fa-linkedin"></i></a> 
                                <a href="#" style={{marginRight: '20px'}}><i className="fa fa-twitter"></i></a>   
                                <a href="#" style={{marginRight: '20px'}}><i className="fa fa-facebook"></i></a> 
                            </div>
                            <p><button className="profile-contact-btn" style={{color: 'white'}}>Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Profile;