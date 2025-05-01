import React, { useState } from 'react'

const CondicionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Renato");
  return (
    <div>
        <h1>Isto sera exibido</h1>
        {x && <p>x = true</p>}
        {!x && <p>x = false</p>}
        {name === "Renato" ? (
            <div>
                <p>O nome é {name}</p>
            </div>
        ) : (
            <div>
                <p>O nome não é Renato</p>
                <p>O nome é {name}</p>
            </div>
        )}
        <button onClick={() => setName("Joao")}>Clique aqui para trocar o nome</button>
    </div>

  )
}

export default CondicionalRender