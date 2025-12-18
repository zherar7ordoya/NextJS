import ejerciciosData from "../data/rutinas";
import { useState } from "react";

const ejercicioGallery = () => {
    const { titulo, rutina = [] } = ejerciciosData[0] || {
        titulo: "",
        rutina: [],
    };

    const [clicked, setClicked] = useState(null);

    return (
        <section>
            <h1>{titulo}</h1>
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

export default ejercicioGallery;
