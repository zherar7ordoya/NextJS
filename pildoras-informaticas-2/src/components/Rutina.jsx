import { useState, useEffect } from "react";
import trabajosData from "../data/rutinas";

console.log(trabajosData);

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
            if (contador > 0) setContador(current => current - 1);
            else {
                if (ejercicioActual < trabajo.rutina.length - 1) {
                    setEjercicioActual(current => current + 1);
                    setContador(5);
                }
                else {
                    setCrono(false);
                    setContador(5);
                    setEjercicioActual(0);
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

    const siguienteTrabajo = () => {
        setTrabajoActual((current) => (current + 1) % trabajosData.length);
        setEjercicioActual(0);
        setContador(5);
        setCrono(false);
    };

    const anteriorTrabajo = () => {
        setTrabajoActual(
            (current) =>
                (current - 1 + trabajosData.length) % trabajosData.length
        );
        setEjercicioActual(0);
        setContador(5);
        setCrono(false);
    };

    return (
        <div>
            <center>
                <h1>{trabajo.titulo}</h1>
                <button onClick={anteriorTrabajo}>Anterior rutina</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => setCrono(true)} disabled={crono}>
                    INICIAR RUTINA
                </button>
                {/* <button onClick={btnOnOff}>PAUSAR RUTINA</button> */}
                <button onClick={() => setCrono(!crono)}>
                    {crono ? "PAUSAR" : "CONTINUAR"}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={siguienteTrabajo}>Siguiente rutina</button>
            </center>

            <center>Tiempo {contador} segundos</center>

            {/* <Row> */}
            {trabajo.rutina.map((ejercicio, indice) => (
                <div key={indice}>
                    <img
                        src={ejercicio.img}
                        onClick={() => setEjercicioActual(indice)}
                        alt=""
                        width={20}
                    />
                </div>
            ))}
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
