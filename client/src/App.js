
import './App.css';
import Navbar from './conponents/Navbar';
import Add from './conponents/Add';
import Home from './conponents/Home';
import Updatelist from './conponents/Updatelist';
import Contactlis from './conponents/Contactlist';
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contacts' element={<Contactlis/>} />
    <Route path='/ajout' element={<Add/>} />
    <Route path='/update/:id' element={<Updatelist/>} />
    </Routes>
   
   
   
   
   
  
    </div>
  );
}

export default App;
