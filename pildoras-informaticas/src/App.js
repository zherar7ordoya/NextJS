import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {

    const miArray = () => {
        const numerosArray = [15, 37, 26, 95, 81];

        return (
            <p>
                {numerosArray.map((numero, index) => (
                    <span key={index}><b>{index}:</b>{numero} </span>
                ))}
            </p>
        );
    }

    const [valorCambio, setValorCambio] = useState(null);

    useEffect(() => {
        const fetchCambio = async () => {
            try {
                const response = await fetch("https://v6.exchangerate-api.com/v6/fcc76650cde7b9f6eb15d913/latest/EUR");
                const data = await response.json();
                console.log(data);
                const valor = await fetch("https://v6.exchangerate-api.com/v6/fcc76650cde7b9f6eb15d913/latest/EUR")
                    .then(res => res.json())
                    .then(data => data.conversion_rates.USD);
                console.log("Valor de cambio EUR a USD:", valor);
                setValorCambio(valor);
            } catch (error) {
                console.error("Error fetching exchange rate:", error);
            }
        }

        fetchCambio();

    }, [] /* El array vacío indica que solo se ejecute una vez (al montar el componente) */);

    const [dollars, setDollars] = useState(null);
    const eurosInputRef = useRef(null); // Referencia al elemento DOM

    const convert = () => {
        const eurosValue = Number(eurosInputRef.current.value);
        if (!isNaN(eurosValue)) {
            // Asumiendo un tipo de cambio actual de 1.08 [1, 2]
            setDollars(eurosValue * valorCambio);
        }
    }

    return <section>
        <h2>Convertidor de Euros a Dólares</h2>
        {/* Asignamos la referencia al input */}
        <input type="text" placeholder="Euros" ref={eurosInputRef} id="euros-input" />
        <button onClick={convert}>Convertir</button>
        <h3>{dollars !== null && `Dólares: $${dollars.toFixed(2)}`}</h3>
        <h2>Mi array de números</h2>
        {miArray()}
    </section>
}

export default App;
