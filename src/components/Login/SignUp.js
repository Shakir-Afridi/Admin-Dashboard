import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

let history = createBrowserHistory()
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    alreadyHaveAnAccount(){
        history.push('/');
        history.go('/');
    }

    login(){
        history.push('/dashboard');
        history.go('/dashboard');    
    }

    render(){
        return(
            <div className="row" style={{ padding: "100px 0"}}>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login-page">
                        <div className="row signIn-text">
                            <div className="col-md-12">
                                <h2>Registeration</h2>
                            </div>
                        </div>
                        <div className="row login_inputs">
                            <div className="col-md-12">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" placeholder="&nbsp;"/>
                                        <span className="mylabel">username</span>
                                        <span className="border"></span>
                                    </label>
                            </div>
                            <div className="col-md-12">
                                <label for="inp" className="inp">
                                    <input type="password" id="inp" placeholder="&nbsp;"/>
                                    <span className="mylabel">password</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div className="col-md-12">
                                <label for="inp" className="inp">
                                    <input type="password" id="inp" placeholder="&nbsp;"/>
                                    <span className="mylabel">confirm password</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div className="col-md-12" style={{paddingTop: "20px"}}>
                                <button className="sigin-btn" onClick={this.login}>Register Now</button>
                            </div>
                        </div>
                        <div className="row sign-up-btn" style={{paddingTop: "0px"}}>
                            <div className="col-md-12">
                                <a onClick={this.alreadyHaveAnAccount}>Alread have an account</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

export default SignUp;