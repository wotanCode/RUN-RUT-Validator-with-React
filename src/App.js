import { useState } from "react/cjs/react.development";
import "./App.css";

function App() {
  const [valid1, setValid1] = useState("");

  //Boton para validar RUN/RUT
  const rut1 = (event) => {
    event.preventDefault();
    //RUN/RUT
    console.log("RUN/RUT Ingresado: "+valid1);
    let identificador = valid1.slice(-1)
    //Identificador sin validar
    console.log("El identificador sin validar es: "+identificador)
    //Validamos que sea un numero
    if (isNaN(identificador)===true){
      //validamos que sea una K
      if (identificador==="k" || identificador==="K"){
        //la colocamos en miniscula para trabajar mas facil con ella
        identificador = "k"
        //Identificador validado
        console.log("El identificador validado es: "+identificador)
      }
    } else if (isNaN(identificador)===false){
        console.log("RUN/RUT invalido")
    }
    
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>RUN/RUT Validator</h1>
      </header>
      <main className="App-main">
        <h2>1° Metodo</h2>
        <form>
          <input
            className="inputs"
            placeholder="xxxxxxxxx-x"
            //Se desestructura el el evente "e" para solo guardar eso en el useState
            onChange={(e) => setValid1(e.target.value)}
          ></input>
          <p className="legenda">
            Ingresa el rut bajo el siguiente formato: 11111111-1
          </p>
          <button onClick={(event) => rut1(event)} className="checks">
            Check
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
