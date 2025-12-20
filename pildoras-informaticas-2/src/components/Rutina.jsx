import { useState, useEffect } from "react";
import ejerciciosData from "../data/rutinas";

const Rutina = (props) => {
    const { titulo, rutina = [] } = ejerciciosData[props.rutina] || {};

    // ESTADOS
    const [ejercicioActual, setEjercicioActual] = useState(null); // Para clic manual
    const [contador, setContador] = useState(0); // Cronómetro
    const [trainingIndex, setTrainingIndex] = useState(null); // Índice del modo entrenamiento
    const [crono, setCrono] = useState(false); // ¿Modo automático ON?

    const startRoutine = () => {
        setTrainingIndex(0);
        setEjercicioActual(rutina[0]); // Mostrar el primero de inmediato
        setContador(5);
        setCrono(true);
    };

    useEffect(() => {
        let timer = null;

        if (crono && contador > 0) {
            timer = setInterval(() => setContador((t) => t - 1), 1000);
        } else if (crono && contador === 0) {
            // Lógica de pasar al siguiente ejercicio
            const nextIndex = trainingIndex + 1;

            if (nextIndex < rutina.length) {
                setTrainingIndex(nextIndex);
                setEjercicioActual(rutina[nextIndex]);
                setContador(5);
            } else {
                setCrono(false);
                setTrainingIndex(null);
            }
        }

        return () => clearInterval(timer);
    }, [crono, contador, trainingIndex, rutina]);

    return (
        <section className="container">
            <h1>{titulo}</h1>
            <button onClick={startRoutine} disabled={crono}>
                {crono ? "Entrenando..." : "Start Routine"}
            </button>

            {crono && <h2>Siguiente en: {contador}s</h2>}

            <div
                className="image-gallery"
                style={{ display: "flex", gap: "10px" }}
            >
                {rutina.map((ejer, index) => (
                    <div
                        key={index}
                        className={`image-item ${
                            trainingIndex === index ? "active-border" : ""
                        }`}
                        onClick={() => !crono && setEjercicioActual(ejer)} // Bloqueamos clic manual si está entrenando
                        style={{
                            cursor: "pointer",
                            border:
                                trainingIndex === index
                                    ? "2px solid red"
                                    : "none",
                        }}
                    >
                        <img src={ejer.img} alt={ejer.ejercicio} width="100" />
                    </div>
                ))}
            </div>

            {/* SECCIÓN DETALLE: Muestra lo seleccionado MANUALMENTE o por el ENTRENAMIENTO */}
            {ejercicioActual && (
                <div className="detail-view">
                    <h2>{ejercicioActual.ejercicio}</h2>
                    <p>Repeticiones: {ejercicioActual.reps}</p>
                    <img
                        src={ejercicioActual.img}
                        alt="preview"
                        className="full-size-image"
                    />
                </div>
            )}
        </section>
    );
};

export default Rutina;
