import logo from './logo.svg';
import './App.css';
import { User } from './user';

function App() {
  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.name.value)
    console.log(event.target.lastName.value)
  }

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
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' />
        <input type='text' name='lastName' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
