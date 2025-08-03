import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Subham",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Shivangi",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Kamlesh",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleNewFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <>
      <Header />
      <div className="app">
        <div className="sidebar">
          <FriendList />
          {showAddFriend && <FormAddFriend />}
          <Button onClick={handleNewFriend}>{`${
            showAddFriend ? "Close" : "Add Friend"
          }`}</Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>EAT-N-SPLIT BILL</h1>
    </header>
  );
}

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
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
          You own {friend.name} {Math.abs(friend.balance)} ₹
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owns you {Math.abs(friend.balance)} ₹
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}

      {/* <button className="button">Select</button> */}
      <Button>Select</Button>
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

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰Bill value</label>
      <input type="text" />

      <label>🧍Your expense</label>
      <input type="text" />

      <label>🫂X's expense</label>
      <input type="text" disabled />

      <label>🙋‍♂️Who is paying the bill ?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
