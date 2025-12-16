import { useState } from "react";
import "./App.css";

function App() {

    // 1. Estados para controlar los inputs
    const [tipo, setTipo] = useState("Hotel");
    const [dias, setDias] = useState(0);

    // 2. Definimos los precios base
    const precioPorDia = tipo === "Hotel" ? 50 : 45;
    const subtotal = dias * precioPorDia;

    // 3. Calculamos el descuento (Lógica de negocio clara y legible)
    let descuento = 0;

    if (tipo === "Hotel") {
        if (dias > 5) descuento = 35;
        else if (dias > 3) descuento = 25;
    } else if (tipo === "Auto") {
        if (dias > 7) descuento = 30;
        else if (dias > 3) descuento = 15;
    }

    // 4. Resultado final derivado
    const totalPagar = subtotal > 0 ? Math.max(0, subtotal - descuento) : 0;

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
