import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
    setLoading(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="brand">USER INFO</span>
        <button className="btn" onClick={loadUsers} disabled={loading}>
          {loading ? "Loading..." : "Get Users"}
        </button>
      </nav>

      <h2>Users:</h2>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <ul className="user-grid">
          {users.map(({ id, first_name, last_name, avatar }) => (
            <li className="user-card" key={id}>
              <img src={avatar} alt={`${first_name} ${last_name}`} />
              <div>
                <p>Name: {`${first_name} ${last_name}`}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
