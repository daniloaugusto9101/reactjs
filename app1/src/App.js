import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Home from './components/pages/Home'

import './App.css';



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route  exact patch="/" element={<Home />} />
        <Route  patch="/contato" element={<Contato />} />
        <Route  patch="/contato" element={<Empresa />} />
      </Routes>
      <Footer/>
    </Router> 
  );
}

export default App;
