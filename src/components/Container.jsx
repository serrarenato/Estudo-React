// Exemplo pegando o que tem dentro de Container do pai.
// passando função do pai para o componente filho
import React from 'react'

const Container = ({children, myFunction}) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <button onClick={myFunction}>Clique aqui para executar a função passada</button>
    </div>
    
  )
}

export default Container