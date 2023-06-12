import "./App.css"
import logofreecodecamp from "./imagenes/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logofreecodecamp}
          alt="Logo freecodecamp"
        />
      </div>
      <div className="contenedorPrincipal">
        <Contador numClicks={numClicks} />
        <Boton texto="Click" botonClick={true} manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          botonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
