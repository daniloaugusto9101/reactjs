import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './componentes/paginas/Home';
import Sobre from './componentes/paginas/Sobre';
import Contato from './componentes/paginas/Contato';
import Container from './componentes/layouts/Container';

import Header from './componentes/layouts/Header';
import Footer from './componentes/layouts/Footer';

import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
