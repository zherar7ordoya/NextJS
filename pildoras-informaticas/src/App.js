// import { GaleriaDeImagenes } from "./components/GaleriaDeImagenes";

import "./App.css";
// import React from "react";
import useState from "react";

function App() {
    /*
    return (
        <div className="App">
            <GaleriaDeImagenes />
        </div>
    );
    */

    const [resultado, setResultado] = useState(null);

    const elemento1 = <h1 className="centrar-titulo">Hola Gerardo</h1>;
    const elemento2 = <h2 className="centrar-suma">{sumar(2, 3)}</h2>;

    const botonPulsado = () => {
        const nuevoResultado = sumar(5, 7);
        setResultado(nuevoResultado);
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <button onClick={botonPulsado}>Botón de ejemplo</button>
            <div>{elemento1}</div>
            <div>{elemento2}</div>
            <div>Resultado: {resultado}</div>
        </div>
    );
}

function sumar(a, b) {
    return a + b;
}

/*
function botonPulsado() {
    alert("Botón pulsado");
}
*/

export default App;
