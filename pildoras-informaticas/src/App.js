import { useState } from "react";
import "./App.css";

function App() {

    // 1. Estados para controlar los inputs
    const [tipo, setTipo] = useState("Hotel");
    const [dias, setDias] = useState(0);

    // 2. Cálculo derivado (no necesitas un tercer estado ni un useRef)
    const precioPorDia = tipo === "Hotel" ? 50 : 40;
    const totalPagar = dias * precioPorDia;

    return (
        <section>
            {/* Select controlado */}
            <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="Hotel">Hotel</option>
                <option value="Auto">Auto</option>
            </select>

            {/* Input controlado */}
            <label htmlFor="dias">Días</label>
            <input
                id="dias"
                type="number"
                value={dias}
                onChange={(e) => setDias(Number(e.target.value))}
            />

            {/* Renderizado condicional limpio */}
            {dias > 0 && (
                <p>
                    Total por {tipo === "Hotel" ? "estancia en hotel" : "alquiler de auto"}: {totalPagar}
                </p>
            )}
        </section>
    );
}

export default App;
