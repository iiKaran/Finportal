import './App.css';
import Services from './Pages/Services';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './Components/Contact';
import Home from './Pages/Home'
function App() {
  return (
    
    <Routes>
      <Route path = "/" element ={<Home></Home>}></Route>
      <Route path = "/services" element ={<Services></Services>}></Route>
      <Route path = "/contact-form" element ={<Contact></Contact>}></Route>
    </Routes>
  );
}

export default App;
