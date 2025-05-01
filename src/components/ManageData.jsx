// Diferenças usando variavel ou State, variavel nao muda o valor na tela.

import { useState } from "react";


const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(10);
  return (
    <div><h1>ManageData
    <p>Valor: {number}</p>
    <p>Valor: {someData}</p></h1>
    <button onClick={()=>someData=15}> Mudar Variavel</button>
    <button onClick={()=>setNumber(100)}> Mudar State</button>
    </div>
  )
}

export default ManageData;