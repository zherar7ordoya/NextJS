import "./App.css";
import { useState, useRef } from "react";

function App() {
    const [dollars, setDollars] = useState(null);
    const eurosInputRef = useRef(null); // Referencia al elemento DOM

    const convert = () => {
        const eurosValue = Number(eurosInputRef.current.value);
        if (!isNaN(eurosValue)) {
            // Asumiendo un tipo de cambio actual de 1.08 [1, 2]
            setDollars(eurosValue * 1.08);
        }
    }

    return <section>
        <h2>Convertidor de Euros a Dólares</h2>
        {/* Asignamos la referencia al input */}
        <input type="text" placeholder="Euros" ref={eurosInputRef} />
        <button onClick={convert}>Convertir</button>
        <h3>{dollars !== null && `Dólares: $${dollars.toFixed(2)}`}</h3>
    </section>
}

export default App;
