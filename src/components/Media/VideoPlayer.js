import React, { Component } from 'react';
import { Player } from 'video-react';
import image from '../../assets/images/img3.jpg';

class VideoPlayer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            
        }
    }
    render(){
        return(
            <Player 
                playsInline
                poster={image}
                >
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
        )
    }
}

export default VideoPlayer;