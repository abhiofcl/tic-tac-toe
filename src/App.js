import "./App.css";
import { StrictMode } from "react";
import { useState } from "react";
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }

  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}
export default App;
