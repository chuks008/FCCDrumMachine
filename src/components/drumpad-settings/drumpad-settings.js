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
                <SwitchLabel label="Power" onToggle="" />
                <p className="settings-key-space">{this.props.currentKey}</p>
                <SwitchLabel label="Bank" onToggle="" />
            </div>
        );
    }
}

export default DrumPadSettings;