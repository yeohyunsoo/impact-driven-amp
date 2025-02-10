import workout from './workout.jpeg';
import './App.css';
import {useState} from 'react';

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={workout} className="App-logo" alt="logo" />
        <p>
          temptemptemp
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/ljm__jimin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Jimin
        </a>
        <p> </p>
        <button onClick={() => setCount(count + 1)}>💕</button>
        <p>좋아요 개수: {count}</p>
      </header>
    </div>
  );
}

export default App;
