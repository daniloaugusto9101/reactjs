import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProjetc from './components/pages/NewProject'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/newproject" element={<NewProjetc />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
