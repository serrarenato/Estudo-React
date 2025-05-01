// Trabalhando com listas e useState

import React, { useState } from 'react'
const deleteRandom = () => {
    const randomNumber = Math.flor(Math.random*3);
    setUsers(prevUsers)
}
const [users] = useState([
  {id:1, name:"Renato", age:27},
  {id:2, name:"Joao", age:20},
  {id:3, name:"Andrea", age:10},
]);

const ListRender = () => {
    const [list] = useState(["Renato", "Joao", "Andrea"]);

  return (
    <div>ListRender

        <ul>
          {list.map((item, i)=>( <li key={i}>{item}</li>) )}  
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender