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
    }

    render() {
        const {pressed} = this.state;
        const poweredOff = this.props.onPowerToggle === "off";
        return (
            <button
                type="button"
                onClick={this.handleClick}
                disabled={poweredOff}
                onTransitionEnd = {() => this.setState({pressed: false})}
                className={this.props.onPowerToggle === "off" ? 'drumpad-button-off' : pressed ? 'drumpad-button pressed' : 'drumpad-button'}>
                <p>{this.props.keyMapping.key}</p>
            </button>
        );
    }
}

export default DrumPadButton;