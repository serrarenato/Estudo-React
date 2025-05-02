// Components
import FirstComponent from './components/MyComponent2';
import TenplateExpressions from './components/TemplateExpressions';

// styles Css
import './App.css'

import MyComponent from './components/MyComponent2';
import Events from './components/Events';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name="Mateus"
  const [username] = useState("MateusUser")
  const cars = [
    { id: 1, brand: "Fusca", km: 1000, color: "blue" },
    { id: 2, brand: "Civic", km: 2000, color: "black" },
    { id: 3, brand: "Palio", km: 3000, color: "red" },
  ];

function showMessage(){
  console.log("Evento do componente pai")
} 

const [message, setMessage] = useState("");
const handleMessage = (msg) => {
  setMessage(msg);
}

  return (
    <div className='App'>
      <h1>Fundametos React</h1>
      <FirstComponent />
      <TenplateExpressions />
      <MyComponent />
      <Events/>
      <ManageData/> 
      <ListRender/>
      <CondicionalRender/>
      <ShowUserName name={name} username={username}/>
      <CarDetails brand="Volks" km={1000} color="blue"/>

     {cars.map((car) => (
        <CarDetails  
          key={car.id}        
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}
      <Fragment/>
      <Container myFunction={showMessage} >
        <p>este é o container</p>
      </Container>
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

    </div>
  );
}

export default App


