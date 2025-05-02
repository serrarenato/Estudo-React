// Conceitos Props -> passar do componente pai para o filho variáveis e funções

import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>Nome do usuario: {props.name} - {props.username}</div>
  )
}

export default ShowUserName