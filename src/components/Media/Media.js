import React, { Component } from 'react';

// Components
import BootstrapAlignMedia from './BootstrapAlignMedia';
import BootstrapNestedMedia from './BootstrapNestedMedia';
import VideoPlayer from './VideoPlayer';
import ReactMediaPlayer from './ReactMediaPlayer';

// video path 
let path = "https://www.youtube.com/watch?v=LBuUL1oFJZY";

class Media extends Component {

    render(){

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Nested Media Objects</h3>
                                <BootstrapAlignMedia />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Nested Media Objects</h3>
                                <BootstrapNestedMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h3>VideoPlayer</h3>
                            <VideoPlayer />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h3> React Media Player</h3>
                            <ReactMediaPlayer path={path}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Media;