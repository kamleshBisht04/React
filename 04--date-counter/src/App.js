import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <h1>Step counter</h1>
      <div className="section">
        <button onClick={() => setStep((s) => s - 1)}>➖</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>➕</button>
      </div>

      <div className="section">
        <button onClick={() => setCount((c) => c - step)}>➖</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c + step)}>➕</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from Today is `
            : `${Math.abs(count)} Days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
