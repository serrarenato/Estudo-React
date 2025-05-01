import React, { useState } from 'react';

const ListRender = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Renato", age: 27 },
    { id: 2, name: "Joao", age: 20 },
    { id: 3, name: "Andrea", age: 10 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * users.length);
    setUsers((prevUsers) => prevUsers.filter((_, index) => index !== randomNumber));
  };

  return (
    <div>
      <h3>ListRender</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;