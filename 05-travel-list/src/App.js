import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Adhar-card", quantity: 1, packed: false },
  { id: 4, description: "Bag", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggle={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>
        🌴<span>Far Away</span> 💼
      </h1>
    </div>
  );
}

function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // guard clasus
    if (!description) return;
    // adding new items
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);

    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onSubmit={onAddItem}>ADD</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((items) => (
          <Items
            items={items}
            key={items.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>

      <div className="actions">
        <select>
          <option value="input">Sort By input order</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed status</option>
        </select>
      </div>
    </div>
  );
}

function Items({ items, onDeleteItem, onToggle }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={items.packed}
          onChange={() => onToggle(items.id)}
        ></input>
        <span style={items.packed ? { textDecoration: "line-through" } : {}}>
          {items.quantity} {items.description}
        </span>
        <span>
          <button onClick={() => onDeleteItem(items.id)}>❌</button>
        </span>
      </li>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats">
      <em>💼 You have X items on your list,and you already packed X (x%)</em>
    </div>
  );
}
