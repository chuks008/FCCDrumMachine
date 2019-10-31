import React from 'react';
import './switch.scss'; // switch css

class Switch extends React.Component {

    constructor(props) {
        super(props);
    }

    toggleMode = () => {
        this.props.onToggle();
        console.log("Bank switched");
    }

    render() {
        return (
            <label className='switch'>
                <input type="checkbox" onClick={this.toggleMode} />
                <span className="slider"></span>
            </label>
        );
    }
}

export default Switch;