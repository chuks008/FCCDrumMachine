import React from 'react';
import ReactDOM from 'react-dom';
import DrumContainer from './components/drumpad-container/drumpad-container';

class App extends React.Component {

    render() {
        return (
            <DrumContainer />
        );
    }

    
}

ReactDOM.render(<App />, document.getElementById('root'));