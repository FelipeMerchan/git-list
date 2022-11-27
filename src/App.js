import logo from './logo.svg';
import './App.css';
import { User } from './user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <User
        name='Felipe'
        avatar='https://avatars.githubusercontent.com/u/47896948?v=4'
      />
    </div>
  );
}

export default App;
