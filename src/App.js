import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React PWA Test</h1>
        <h2>{count}</h2>
        <div className="buttons">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
