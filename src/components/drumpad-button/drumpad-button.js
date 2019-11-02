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
        const currentAudio = document.querySelector(`#${this.props.keyMapping.key}`);
        currentAudio.volume = this.props.currentVolume / 100;
    }

    handleClick = () => {
        if(this.props.onPowerToggle !== 'off') {
            this.props.onAction(this.props.index);
            this.setState({pressed: true});
            const currentAudio = document.querySelector(`#${this.props.keyMapping.key}`);
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
                id={this.props.keyMapping.sound} 
                onClick={this.handleClick}
                disabled={poweredOff}
                onTransitionEnd = {() => this.setState({pressed: false})}
                className={this.props.onPowerToggle === "off" ? 'drum-pad drum-pad-off' : pressed ? 'drum-pad pressed' : 'drum-pad'}>
                <p>{this.props.keyMapping.key}</p>
                <audio 
                    id={this.props.keyMapping.key} 
                    className='clip'
                    src={this.props.keyMapping.audioFile}/>
            </div>
        );
    }
}

export default DrumPadButton;