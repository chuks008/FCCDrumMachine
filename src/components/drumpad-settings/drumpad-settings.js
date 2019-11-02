import React from 'react';
import SwitchLabel from '../switch-label/SwitchLabel';
import VolumeControl from '../volume-slider/volume-slider';
import './drumpad-settings.scss';

class DrumPadSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isEnabled = this.props.powerMode === 'off' ? false : true;
        return (
            <div id="settings-container">
                <SwitchLabel label="Power" onAction={this.props.onPowerToggle} isEnabled={true} />
                <p id='display' className={isEnabled ? "settings-key-space" : "settings-key-space disabled-settings-key"}>{this.props.currentKey}</p>
                <VolumeControl onVolumeChange={this.props.onVolumeSlide} isEnabled={isEnabled} />
                <SwitchLabel label="Bank" onAction={this.props.onModeToggle} isEnabled={isEnabled} />
            </div>
        );
    }
}

export default DrumPadSettings;