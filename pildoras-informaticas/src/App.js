import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Contador } from "./components/Contador";
import { Saludo } from "./components/Saludo";

function App() {

    const usuario = {
        nombre: "Gerardo",
        apellido: "Tordoya",
        edad: 28,
        género: "masculino"
    };

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
                const valor = await fetch("https://v6.exchangerate-api.com/v6/fcc76650cde7b9f6eb15d913/latest/EUR")
                    .then(res => res.json())
                    .then(data => data.conversion_rates.USD);
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
        {/* Ejercicio API */}
        <h2>Convertidor de Euros a Dólares</h2>
        <input type="text" placeholder="Euros" ref={eurosInputRef} id="euros-input" />
        <button onClick={convert}>Convertir</button>
        <h3>{dollars !== null && `Dólares: $${dollars.toFixed(2)}`}</h3>

        {/* Ejercicio MAP */}
        <hr />
        <h2>Mi array de números</h2>
        {miArray()}

        {/* Ejercicio Componente */}
        <hr />
        <h2>Componente desde función</h2>
        <Contador />

        {/* Ejercicio PROPS */}
        <hr />
        <h2>Componente con Props</h2>
        <Saludo usuario={usuario} />
    </section>
}



export default App;
