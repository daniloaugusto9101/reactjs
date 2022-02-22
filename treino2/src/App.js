import { BrowserRouter, Routes, Route, link, Link } from 'react-router-dom';

import { useState } from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import Novoprojeto from './components/pages/Novoprojeto';


function App() {

  let [valor, setValor] = useState(0);

  function aumetarValor(){
    setValor( (prevState) => prevState + 1 );
  }

  function diminuirValor(){
    setValor( (prevValor) => prevValor -1 );
  }

  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Container customClass="min-height">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/sobre" element={<Sobre />} />
    //       <Route path="/contato" element={<Contato />} />
    //       <Route path="/novoprojeto" element={<Novoprojeto />} />
    //     </Routes>
    //   </Container>
    //   <Footer />
    // </BrowserRouter>
    <div>
      <p>Contato de numero: {valor}</p> 
      <button onClick={aumetarValor}>+</button>
      <button onClick={diminuirValor}> - </button>
    </div>
  );
}

export default App;
