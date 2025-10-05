import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <header>
        <h2>Counter</h2>
      </header>
      <div>
        <span> {count} </span> <br />
        <button onClick={decrement}> Decrement </button>
        <button onClick={Increment}> Increment </button>
        <button onClick={reset}> Reset </button>
      </div>
    </>
  );
};
export default App;
