import React from 'react';
import './drumpad-button.scss';

class DrumPadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }

    handleClick = () => {
        this.props.onAction(this.props.index);
        this.setState({pressed: true});
        const currentAudio = document.getElementsByClassName('key_audio')[this.props.index];

        if(currentAudio.paused) {
            currentAudio.play()
        } else {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio.play();
        }
    }

    render() {
        const {pressed} = this.state;
        const poweredOff = this.props.onPowerToggle === "off";
        // let audio = new Audio(this.props.audioFile);
        return (
            <button
                type="button"
                onClick={this.handleClick}
                disabled={poweredOff}
                onTransitionEnd = {() => this.setState({pressed: false})}
                className={this.props.onPowerToggle === "off" ? 'drumpad-button-off' : pressed ? 'drumpad-button pressed' : 'drumpad-button'}>
                <p>{this.props.keyMapping.key}</p>
                <audio className='key_audio'>
                        <source src={this.props.keyMapping.audioFile} />
                </audio>
            </button>
        );
    }
}

export default DrumPadButton;