import React from 'react';
import ReactDOM from 'react-dom';
import fire from './fire.jpg';
import './styles/drum-machine.scss'; // drumpad css
import Switch from './components/Switch';


class DrumPadButton extends React.Component {
    render() {
        return (
            <button className=""></button>
        );
    }
}

class DrumPadSettings extends React.Component {

    render() {
        return (
            <div>
            </div>
        );
    }
}

class DrumPad extends React.Component {
    render() {
        return (
            <div id="drum-pad">
            </div>
        );
    }
}

class DrumContainer extends React.Component {
    render() {
        return (
            <div id='drum-container'>
                <img id='fire-img' src={fire}/>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Switch />
            // <DrumContainer />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));