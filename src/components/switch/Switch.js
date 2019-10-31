import React from 'react';
import './switch.scss'; // switch css

class Switch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: true
        }
    }

    toggleMode = () => {
        if(this.props.enabled === true) {
            this.props.onToggle();
        }
    }

    render() {
        return (
            <label className={this.props.enabled ? 'switch' : 'switch switch-off'}>
                <input type="checkbox" onClick={this.toggleMode} />
                <span className={this.props.enabled ? "slider" : "slider-off"}></span>
            </label>
        );
    }
}

export default Switch;