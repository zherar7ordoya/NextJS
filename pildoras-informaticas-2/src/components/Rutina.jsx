import { useState, useEffect } from "react";
import trabajosData from "../data/rutinas";

const Rutina = () => {
    //
    const [trabajoActual, setTrabajoActual] = useState(0);
    const [ejercicioActual, setEjercicioActual] = useState(0);
    const trabajo = trabajosData[trabajoActual];
    const [contador, setContador] = useState(5);
    // Controla el botón
    const [crono, setCrono] = useState(false);
    //
    useEffect(() => {
        //
        if (crono == false) return;

        setTimeout(() => {
            if (contador > 0) setContador((current) => current - 1);
            else {
                if (ejercicioActual < trabajo.rutina.length - 1) {
                    setEjercicioActual((current) => current + 1);
                    setContador(5);
                } else {
                    //setCrono(false);
                    setEjercicioActual(0);
                    setContador(5);
                }
            }
        }, 1000);
    }, [
        contador,
        crono,
        trabajoActual,
        ejercicioActual,
        trabajo.rutina.length,
    ]);

    const ejercicioSiguiente = () => {
        if (ejercicioActual == trabajo.rutina.length - 1) setEjercicioActual(0);
        else setEjercicioActual(current => current + 1);
    };

    const ejercicioAnterior = () => {
        if (ejercicioActual == 0) setEjercicioActual(trabajo.rutina.length - 1);
        else setEjercicioActual(current => current - 1);
    };

    return (
        <div>
            <center>
                <h1>{trabajo.titulo}</h1>
                <button onClick={ejercicioAnterior}>Anterior</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setCrono(true)} disabled={crono}>
                    INICIAR RUTINA
                </button>
                {/* <button onClick={btnOnOff}>PAUSAR RUTINA</button> */}
                <button onClick={() => setCrono(!crono)}>
                    {crono ? "PAUSAR" : "CONTINUAR"}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={ejercicioSiguiente}>Siguiente</button>
            </center>

            <center>Tiempo {contador} segundos</center>

            {/* <Row> */}
            <section className="image-gallery">
                {trabajo.rutina.map((ejercicio, indice) => (
                    <div key={indice}>
                        <img
                            src={ejercicio.img}
                            onClick={() => setEjercicioActual(indice)}
                            alt=""
                        />
                    </div>
                ))}
            </section>
            {/* </Row> */}

            {/* <ImagenSeleccionada> */}
            <img src={trabajo.rutina[ejercicioActual].img} alt="" width="500" />

            <div className="info-descripcion">
                <h3>Nombre: {trabajo.rutina[ejercicioActual].ejercicio}</h3>
                <p>Repeticiónes: {trabajo.rutina[ejercicioActual].reps}</p>
            </div>
            {/* </ImagenSeleccionada> */}
        </div>
    );
};

export default Rutina;
