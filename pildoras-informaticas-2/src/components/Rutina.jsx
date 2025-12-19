import { useState, useEffect } from "react";
import ejerciciosData from "../data/rutinas";

const Rutina = (props) => {
    const { titulo, rutina = [] } = ejerciciosData[props.rutina] || {};

    // ESTADOS
    const [selectedEjercicio, setSelectedEjercicio] = useState(null); // Para clic manual
    const [timeLeft, setTimeLeft] = useState(0); // Cronómetro
    const [trainingIndex, setTrainingIndex] = useState(null); // Índice del modo entrenamiento
    const [isActive, setIsActive] = useState(false); // ¿Modo automático ON?

    const startRoutine = () => {
        setTrainingIndex(0);
        setSelectedEjercicio(rutina[0]); // Mostrar el primero de inmediato
        setTimeLeft(5);
        setIsActive(true);
    };

    useEffect(() => {
        let timer = null;

        if (isActive && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
        } else if (isActive && timeLeft === 0) {
            // Lógica de pasar al siguiente ejercicio
            const nextIndex = trainingIndex + 1;

            if (nextIndex < rutina.length) {
                setTrainingIndex(nextIndex);
                setSelectedEjercicio(rutina[nextIndex]);
                setTimeLeft(5);
            } else {
                setIsActive(false);
                setTrainingIndex(null);
            }
        }

        return () => clearInterval(timer);
    }, [isActive, timeLeft, trainingIndex, rutina]);

    return (
        <section className="container">
            <h1>{titulo}</h1>
            <button onClick={startRoutine} disabled={isActive}>
                {isActive ? "Entrenando..." : "Start Routine"}
            </button>

            {isActive && <h2>Siguiente en: {timeLeft}s</h2>}

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
                        onClick={() => !isActive && setSelectedEjercicio(ejer)} // Bloqueamos clic manual si está entrenando
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
            {selectedEjercicio && (
                <div className="detail-view">
                    <h2>{selectedEjercicio.ejercicio}</h2>
                    <p>Repeticiones: {selectedEjercicio.reps}</p>
                    <img
                        src={selectedEjercicio.img}
                        alt="preview"
                        className="full-size-image"
                    />
                </div>
            )}
        </section>
    );
};

export default Rutina;
