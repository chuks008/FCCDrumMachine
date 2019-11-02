import React from 'react';
import './drumpad-button.scss';

class DrumPadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }

    componentDidUpdate() {
        console.log(this.props.currentVolume);
        const currentAudio = document.querySelector(`#audio-${this.props.index}`);
        currentAudio.volume = this.props.currentVolume / 100;
    }

    handleClick = () => {
        if(this.props.onPowerToggle !== 'off') {
            this.props.onAction(this.props.index);
            this.setState({pressed: true});
            const currentAudio = document.querySelector(`#audio-${this.props.index}`);
            currentAudio.load();

            if(!currentAudio.paused) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio.play();
                return;
            } 

            currentAudio.play();
        }
    }

    render() {
        const {pressed} = this.state;
        const poweredOff = this.props.onPowerToggle === "off";
        return (
            <div
                onClick={this.handleClick}
                disabled={poweredOff}
                onTransitionEnd = {() => this.setState({pressed: false})}
                className={this.props.onPowerToggle === "off" ? 'drumpad-button-off' : pressed ? 'drumpad-button pressed' : 'drumpad-button'}>
                <p>{this.props.keyMapping.key}</p>
                <audio 
                    id={`audio-${this.props.index}`}
                    onVolumeChange={this.onAudioVolumeChanged}>
                        <source src={this.props.keyMapping.audioFile} />
                </audio>
            </div>
        );
    }
}

export default DrumPadButton;