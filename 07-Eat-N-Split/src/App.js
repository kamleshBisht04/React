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

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add New Friend</Button>
      </div>
    </div>
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

function Button({ children }) {
  return <button className="button">{children}</button>;
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
