import React from 'react';
import SwitchLabel from '../switch-label/SwitchLabel';
import './drumpad-settings.scss';

class DrumPadSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="settings-container">
                <SwitchLabel label="Power" onAction={this.props.onPowerToggle} isEnabled={true} />
                <p className="settings-key-space">{this.props.currentKey}</p>
                <SwitchLabel label="Bank" onAction={this.props.onModeToggle} isEnabled={this.props.powerMode === 'off' ? false : true} />
            </div>
        );
    }
}

export default DrumPadSettings;