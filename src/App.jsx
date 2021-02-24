import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <h3>WEB and MUSIC</h3>
        <p>
          by Dias Brothers
        </p>
        <a
          className="App-link"
          href="https://www.db-uk.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit website
        </a>
      </header>
    </div>
  );
}

export default App;
