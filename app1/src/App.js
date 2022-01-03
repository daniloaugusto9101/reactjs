// import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Danilo"
  const newName = name.toUpperCase(name)

  function soma(a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Meu Primeiro App</h1>
      <p>Bem vindo, {newName}</p>
      <p>Soma: {soma(2,6)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
