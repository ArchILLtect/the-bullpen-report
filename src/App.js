import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1>Welcome to The Bullpen Report</h1>
            <p>Created by Nick Hanson - Built with React</p>
            <p>Version 0.1.0 - Using the Bullpen API</p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>


        </div>
    );
}

export default App;
