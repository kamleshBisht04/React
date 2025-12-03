export  default function Items({ items, onDeleteItem, onToggle }) {
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
