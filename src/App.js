import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <button
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install
    </button>
  );
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttons">
          <InstallPWA />
        </div>
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
