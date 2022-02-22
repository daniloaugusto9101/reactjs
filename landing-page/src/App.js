import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './componentes/paginas/Home';
import Sobre from './componentes/paginas/Sobre';
import Contato from './componentes/paginas/Contato';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/sobre">Sobre</Link></div>
        <div><Link to="/contato">Contato</Link></div>
      </nav>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
