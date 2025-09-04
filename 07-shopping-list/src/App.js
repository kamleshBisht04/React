const customers = [
  {
    id: 1,
    name: "Sanjay",
    image: "https://i.pravatar.cc/48?u=1",
    address: "New Delhi",
  },
  {
    id: 2,
    name: "Shivangi",
    image: "https://i.pravatar.cc/48?u=2",
    address: "Uttarakhand",
  },
  {
    id: 3,
    name: "Kamlesh",
    image: "https://i.pravatar.cc/48?u=3",
    address: "Ramnager",
  },
  {
    id: 4,
    name: "Swati",
    image: "https://i.pravatar.cc/48?u=4",
    address: "Haridwar",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <div className="app">
        <div className="sidebar">
          <FormAddCustomer />
          <CustomerList customers={customers} />
        </div>
      </div>
      ;
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Shopping List </h1>
    </header>
  );
}

function FormAddCustomer() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑 Customer Name:</label>
      <input type="text" />

      <label>🌄 Profile URL:</label>
      <input type="text" />

      <label>🔖 Address:</label>
      <input type="text" />

      <button className="button">ADD</button>
    </form>
  );
}

function CustomerList({ customers }) {
  return (
    <ul>
      {customers.map((customer) => (
        <Customer customer={customer} />
      ))}
    </ul>
  );
}

function Customer({ customer }) {
  return (
    <li>
      <img src={customer.image} alt={customer.name} />
      <h3>{customer.name}</h3>
      <p>{customer.address}</p>
    </li>
  );
}
