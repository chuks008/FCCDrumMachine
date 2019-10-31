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
                <SwitchLabel label="Power" onAction={this.props.onPowerToggle}/>
                <p className="settings-key-space">{this.props.currentKey}</p>
                <SwitchLabel label="Bank" onAction={this.props.onModeToggle} />
            </div>
        );
    }
}

export default DrumPadSettings;