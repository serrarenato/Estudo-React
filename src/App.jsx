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

function App() {
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
     
    </div>
  );
}

export default App


