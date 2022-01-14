import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Sobre from './components/pages/Sobre'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
