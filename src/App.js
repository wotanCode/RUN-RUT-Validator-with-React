import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RUN/RUT Validator</h1>
      </header>
      <main className="App-main">
      <h2>1° Metodo</h2>
        <form>
          <input className="inputs" placeholder="xxxxxxxxx-x"></input>
          <p className="legenda">Ingresa el rut bajo el siguiente formato: 11111111-1</p>
          <button className="checks">Check</button>
        </form>
      </main>
    </div>
  );
}

export default App;
