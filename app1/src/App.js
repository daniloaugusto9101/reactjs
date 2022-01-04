// import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {

const nm1 = "Danilo"

  return (
    <div className="App">      
      <Pessoa
        foto="https://via.placeholder.com/150" 
        nome="Danilo"
        idade="30"
        profissao="Dev Frontend"
      />
    <Frase />
    <Frase />
    <Frase />
    </div>
    
  );
}

export default App;
