//Passando varias variaveis como props para o componente CarDetails
import React from 'react'


const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2>CarDetails</h2>
        <ul>
            <li> Marca: {brand} </li>
            <li> KM: {km} </li>
            <li> Color: {color} </li>
        </ul>
    </div>
  )
}

export default CarDetails