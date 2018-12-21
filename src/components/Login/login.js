import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import axios from 'axios';


// icons
import facebookIcon from '../../assets/images/facebookIcon.png';
import googleIcon from '../../assets/images/googleIcon.png';
import linkedInIcon from '../../assets/images/linkedInIcon.png';
import twitterIcon from '../../assets/images/twitterIcon.png';

import backbround from '../../assets/images/back.jpg'

let history = createBrowserHistory();
let self;
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        self = this;
    }

    handleChange(e){
        let {name, value} = e.target
        if (name === "username"){
            self.setState({
                username: value
            })
        } else {
            self.setState({
                password: value
            })
        }
        
    }

    signup(){
        history.push('/signup');
        history.go('/signup');
    }

    login(){
        if (self.state.password == "" || self.state.username == ""){
            alert('please fill all the fields')
        } else{
            history.push('/dashboard');
            history.go('/dashboard');
            // let data = {
            //     "username": self.state.username,
            //     "password": self.state.password
            // }
            // axios.post(BASE_API_path+'/api', data)
            //     .then(res => {
            //         if (res.data.code === 200) {
            //             history.push('/dashboard');
            //             history.go('/dashboard');
            //         }
            //     })
        }
       
        
    }

    render(){
        return(
            <div className="row" style={{ padding: "100px 0"}}>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login-page">
                        <div className="row signIn-text">
                            <div className="col-md-12">
                                <h2>Sign In</h2>
                            </div>
                        </div>
                        <div className="row login_inputs">
                            <div className="col-md-12">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" name="username" onChange={self.handleChange} placeholder="&nbsp;"/>
                                        <span className="mylabel">username</span>
                                        <span className="border"></span>
                                    </label>
                            </div>
                            <div className="col-md-12">
                                <label for="inp" className="inp">
                                    <input type="password" id="inp" name="password" onChange={self.handleChange} placeholder="&nbsp;"/>
                                    <span className="mylabel">password</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div className="col-md-12" style={{paddingTop: "20px"}}>
                                <button className="sigin-btn" onClick={this.login}>Login</button>
                            </div>
                        </div>
                        <div className="col-md-12" style={{paddingTop: "20px", textAlign: 'center'}}>
                            <h4> or login with</h4>
                        </div>
                        <div className="col-md-12 social-media-icons">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={facebookIcon} width="50px"/>
                                    <img src={googleIcon} width="50px"/>
                                    <img src={linkedInIcon} width="50px"/>
                                    <img src={twitterIcon} width="50px"/>
                                </div>
                            </div>
                        </div>
                        <div className="row sign-up-btn">
                            <div className="col-md-12">
                                <a onClick={self.signup}>Register Here</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

export default Login;