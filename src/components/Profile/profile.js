import React, { Component } from 'react';

// components
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';
import ProfileCard from './ProfileCard';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
            <div className="row">
                <div className="col-md-7">
                    <EditProfile />
                </div>
                <div className="col-md-5">
                    <ViewProfile />
                </div>
            </div>
            </div>
        )
    }
}

export default Profile;