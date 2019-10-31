import React from 'react';
import DrumPadButton from '../drumpad-button/drumpad-button';
import './drumpad.scss';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: []
        }
    }

    render() {
        const drumPadButtons = this.props.keys.map((mapping, index) => {
            return (
                <DrumPadButton 
                    index={index} 
                    onAction={this.props.onBtnClick} 
                    key={mapping.key+index} 
                    keyMapping={mapping}
                    onPowerToggle={this.props.powerMode}
                />
            );
        })
        return (
            <div id="drum-pad">
                {drumPadButtons}
            </div>
        );
    }
}

export default DrumPad;