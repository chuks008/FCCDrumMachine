import React from 'react';
import ReactDOM from 'react-dom';
import DrumContainer from './components/drumpad-container/drumpad-container';
import './styles/drum-machine.scss';

class App extends React.Component {

    render() {
        return (
            <div id='outer-container'>
                <DrumContainer />
            </div>
            
        );
    }

    
}

ReactDOM.render(<App />, document.getElementById('root'));