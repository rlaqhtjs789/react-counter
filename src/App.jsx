import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
      </header>

      <button data-testid="minus-button" disabled={disabled} onClick={() => setCount(count - 1)}>
        -
      </button>
      <button data-testid="plus-button" disabled={disabled} onClick={() => setCount(count + 1)}>
        +
      </button>

      <div>
        <button style={{ backgroundColor: "blue"}} onClick={() => setDisabled(!disabled)} data-testid="on/off-button">on/off</button>
      </div>
    </div>
  );
}

export default App;
