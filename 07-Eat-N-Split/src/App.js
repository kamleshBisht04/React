const initialFriends = [
  {
    id: 118889,
    name: "Deepak",
    image: "https://i.pravatar.cc/48?u=118889",
    balance: -7,
  },
  {
    id: 933390,
    name: "Deepak",
    image: "https://i.pravatar.cc/48?u=933390",
    balance: 20,
  },
  {
    id: 499476,
    name: "Kamlesh",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 499480,
    name: "Suman",
    image: "https://i.pravatar.cc/48?u=499480",
    balance: 100,
  },
];

function Button({ children }) {
  return <button className="button">{children}</button>;
}

export default function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <div className="sidebar">
          <FriendList friends={initialFriends} />
          <FormAddFriend />
          <Button>{"close"}</Button>
        </div>
        <FormSplitBill />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>EAT-N-SPLIT BILL</h1>
    </header>
  );
}

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          Your own {friend.name} ₹ {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owns your ₹ {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}

      <Button>{"Select"}</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend name</label>
      <input type="text" placeholder="Enter Your Name ?" />
      <label>🌄Image URL</label>
      <input type="text" placeholder="Enter profile URL" />
      <Button>{"Add Friend"}</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with X</h2>
      <label>💰Bill value</label>
      <input type="number" />
      <label>🧍Your expense</label>
      <input type="number" />
      <label>🫂 X's expense</label>
      <input type="text" disabled />
      <label>🙋‍♂️Who is paying the bill ?</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
