import ejerciciosData from "../data/rutinas";
import { useState } from "react";

const Rutina01 = () => {
    // Destructure to get the first rutina where index is 0.
    const { titulo, rutina = [] } = ejerciciosData[0] || {
        titulo: "",
        rutina: [],
    };

    const [clicked, setClicked] = useState(null);

    const [time, setTime] = useState(0);

    const beginner = () => {
        while (true) {
            rutina.map((ejercicio) => {
                //
                console.log(ejercicio);
                //
                setClicked(ejercicio);
                for (let i = 5; i >= 0; i--) {
                    //
                    console.log(i);
                    //
                    setTime(i);
                    const start = Date.now();
                    while (Date.now() - start < 1000);
                }
            });
        }
    };

    return (
        <section className="container">
            <h1>{titulo}</h1>
            <button onClick={beginner}>Start</button>
            <h2>{time}</h2>
            <div className="image-gallery">
                {rutina.map((ejercicio, index) => (
                    <div key={index} className="image-item">
                        <img
                            src={ejercicio.img}
                            alt={ejercicio.ejercicio}
                            onClick={() => setClicked(ejercicio)}
                        />
                    </div>
                ))}
            </div>
            <div>
                {clicked && (
                    <>
                        <h2>{clicked.ejercicio}</h2>
                        <p>Repetitions: {clicked.reps}</p>

                        <img
                            src={clicked.img}
                            alt={clicked.ejercicio}
                            className="full-size-image"
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default Rutina01;
