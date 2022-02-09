import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import Novoprojeto from './components/pages/Novoprojeto';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/novoprojeto" element={<Novoprojeto />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
