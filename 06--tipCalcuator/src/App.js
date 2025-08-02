import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <h1>Tip Calculator</h1>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tips = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="form_grid">
      <BillInput bill={bill} onSelect={setBill} />

      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      <Output bill={bill} tips={tips} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSelect }) {
  return (
    <>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Enter the bill amount ?"
        value={bill}
        onChange={(e) => onSelect(Number(e.target.value))}
      />
    </>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

function Output({ tips, bill }) {
  return (
    <>
      <label>Total Payable :</label>
      <h3>
        You pay {bill + tips}₹ (${bill} ₹ + {tips}₹ tip)
      </h3>
    </>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
