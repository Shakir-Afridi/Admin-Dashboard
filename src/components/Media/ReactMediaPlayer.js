import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause,
        CurrentTime,
        Progress,
        SeekBar,
        Duration,
        MuteUnmute,
        Volume,
        Fullscreen} = controls

class ReactMediaPlayer extends Component {
  render() {
      const { path } = this.props;
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={path} />
          </div>
          <div className="media-controls" style={{width: '55%'}}>
              {/* <PlayPause /> */}
              {/* <CurrentTime /> */}
              {/* <Progress /> */}
              <SeekBar />
              {/* <Duration /> */}
              {/* <MuteUnmute /> */}
              {/* <Volume /> */}
              {/* <Fullscreen /> */}
          </div>
        </div>
      </Media>
    )
  }
}

export default ReactMediaPlayer;